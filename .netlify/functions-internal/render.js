const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-80be3042.js","imports":["_app/immutable/start-80be3042.js","_app/immutable/chunks/index-a7123073.js","_app/immutable/chunks/singletons-4f8eda6d.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":2},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
