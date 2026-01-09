import { replacePathParams } from './replacePathParams';

test('replacePathParams 基本測試', () => {
    const str = '/abc/:id';
    const data = { id: '1' };
    expect(replacePathParams(str, data)).toBe('/abc/1');
});

test('replacePathParams 多個參數測試', () => {
    const str = '/user/:userId/post/:postId';
    const data = { userId: '123', postId: '456' };
    expect(replacePathParams(str, data)).toBe('/user/123/post/456');
});

test('replacePathParams 參數不存在時保留原樣', () => {
    const str = '/abc/:id/:name';
    const data = { id: '1' };
    expect(replacePathParams(str, data)).toBe('/abc/1/:name');
});

test('replacePathParams 數字參數測試', () => {
    const str = '/product/:id';
    const data = { id: 100 };
    expect(replacePathParams(str, data)).toBe('/product/100');
});

test('replacePathParams 空物件測試', () => {
    const str = '/abc/:id';
    const data = {};
    expect(replacePathParams(str, data)).toBe('/abc/:id');
});

test('replacePathParams 空字串測試', () => {
    expect(replacePathParams('', { id: '1' })).toBe('');
});

test('replacePathParams 沒有參數的路徑測試', () => {
    const str = '/abc/def';
    const data = { id: '1' };
    expect(replacePathParams(str, data)).toBe('/abc/def');
});

test('replacePathParams 重複參數名測試', () => {
    const str = '/user/:id/friend/:id';
    const data = { id: '999' };
    expect(replacePathParams(str, data)).toBe('/user/999/friend/999');
});

test('replacePathParams 複雜路徑測試', () => {
    const str = '/api/v1/:version/users/:userId/orders/:orderId';
    const data = { version: '2', userId: 'user123', orderId: 'order456' };
    expect(replacePathParams(str, data)).toBe('/api/v1/2/users/user123/orders/order456');
});

test('replacePathParams 參數值為0測試', () => {
    const str = '/page/:page';
    const data = { page: 0 };
    expect(replacePathParams(str, data)).toBe('/page/0');
});

test('replacePathParams 底線參數名測試', () => {
    const str = '/user/:user_id/post/:post_id';
    const data = { user_id: '123', post_id: '456' };
    expect(replacePathParams(str, data)).toBe('/user/123/post/456');
});

test('replacePathParams null 參數測試', () => {
    const str = '/abc/:id';
    const data = { id: null as any };
    expect(replacePathParams(str, data)).toBe('/abc/:id');
});

test('replacePathParams undefined 參數測試', () => {
    const str = '/abc/:id';
    const data = { id: undefined as any };
    expect(replacePathParams(str, data)).toBe('/abc/:id');
});

test('replacePathParams 特殊字符值測試', () => {
    const str = '/search/:query';
    const data = { query: 'hello world' };
    expect(replacePathParams(str, data)).toBe('/search/hello world');
});

test('replacePathParams 部分替換測試', () => {
    const str = '/user/:userId/posts/:postId/comments/:commentId';
    const data = { userId: 'u1', commentId: 'c1' };
    expect(replacePathParams(str, data)).toBe('/user/u1/posts/:postId/comments/c1');
});

test('replacePathParams 自定義前綴 {} 測試', () => {
    const str = '/abc/{id}';
    const data = { id: '1' };
    expect(replacePathParams(str, data, '{}')).toBe('/abc/1');
});

test('replacePathParams 自定義前綴 {} 多個參數測試', () => {
    const str = '/user/{userId}/post/{postId}';
    const data = { userId: '123', postId: '456' };
    expect(replacePathParams(str, data, '{}')).toBe('/user/123/post/456');
});

test('replacePathParams 自定義前綴 $ 測試', () => {
    const str = '/abc/$id';
    const data = { id: '1' };
    expect(replacePathParams(str, data, '$')).toBe('/abc/1');
});

test('replacePathParams 自定義前綴 # 測試', () => {
    const str = '/page/#pageNum';
    const data = { pageNum: '5' };
    expect(replacePathParams(str, data, '#')).toBe('/page/5');
});

test('replacePathParams 自定義前綴 @ 測試', () => {
    const str = '/user/@username/profile';
    const data = { username: 'john' };
    expect(replacePathParams(str, data, '@')).toBe('/user/john/profile');
});

test('replacePathParams 混合前綴不會互相干擾', () => {
    const str = '/api/:version/user/{id}';
    const data = { version: 'v1', id: '123' };
    // 使用 : 前綴只會替換 :version
    expect(replacePathParams(str, data, ':')).toBe('/api/v1/user/{id}');
    // 使用 {} 前綴只會替換 {id}
    expect(replacePathParams(str, data, '{}')).toBe('/api/:version/user/123');
});
