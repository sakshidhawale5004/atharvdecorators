globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { t as FastResponse } from "./_libs/srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"2eee-Zudf5D167jy2ixaqhNajq9Fn/wk\"",
		"mtime": "2026-11-19T14:05:11.723Z",
		"size": 12014,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-19T14:05:11.750Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (10).png": {
		"type": "image/png",
		"etag": "\"5056a-Rd8Sw2+iDYQ6jZLVt1mwwn9KkMk\"",
		"mtime": "2026-11-20T06:55:06.629Z",
		"size": 329066,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (10).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (16).png": {
		"type": "image/png",
		"etag": "\"1c0fc-QmnbJZ7k9uOJx+o/j6rNLLgxf4c\"",
		"mtime": "2026-11-20T06:55:06.695Z",
		"size": 114940,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (16).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (17).png": {
		"type": "image/png",
		"etag": "\"6976d-Cm+9Bewopx1f0+OEFxKGEifMOUI\"",
		"mtime": "2026-11-20T06:55:06.697Z",
		"size": 431981,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (17).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (19).png": {
		"type": "image/png",
		"etag": "\"6f53d-mBka6LdEVYNE4jv5fi9y33akpbU\"",
		"mtime": "2026-11-20T06:55:06.728Z",
		"size": 455997,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (19).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (9).png": {
		"type": "image/png",
		"etag": "\"d8d5-9ic/ZZbi7Aw+CSKBa/Qwj2Cve7Q\"",
		"mtime": "2026-11-20T06:55:06.798Z",
		"size": 55509,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (9).png"
	},
	"/assets/about-BCqGnGtC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-oYG87DFMSUKvkT+m3UFAr+seZzc\"",
		"mtime": "2026-11-20T11:18:22.993Z",
		"size": 71,
		"path": "../public/assets/about-BCqGnGtC.js"
	},
	"/assets/civil-repairs-structural-maintenance-B4p-3Bdf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-gDg74Lv26rWhStwOds0xCqt4nfY\"",
		"mtime": "2026-11-20T11:18:22.997Z",
		"size": 121,
		"path": "../public/assets/civil-repairs-structural-maintenance-B4p-3Bdf.js"
	},
	"/assets/contact-DTbsvTco.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-6K+bkBD/RJWrLsPDojzSfYXis9Q\"",
		"mtime": "2026-11-20T11:18:22.998Z",
		"size": 71,
		"path": "../public/assets/contact-DTbsvTco.js"
	},
	"/assets/exterior-painting-building-repainting-B2OEBayW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-wsafBjh7aSHsZW3hzIziudOZxU4\"",
		"mtime": "2026-11-20T11:18:22.998Z",
		"size": 121,
		"path": "../public/assets/exterior-painting-building-repainting-B2OEBayW.js"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (1).png": {
		"type": "image/png",
		"etag": "\"9461b-AHAoPRHQhcqe7YkXZoEZyoWAdG0\"",
		"mtime": "2026-11-20T06:55:06.629Z",
		"size": 607771,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (1).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (12).png": {
		"type": "image/png",
		"etag": "\"b9d4e-EcVUoVTYljJxckV5DzzoYt/CWBE\"",
		"mtime": "2026-11-20T06:55:06.662Z",
		"size": 761166,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (12).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (8).png": {
		"type": "image/png",
		"etag": "\"54749-CuHg34e4wjOhsxBax7UlofwM7/w\"",
		"mtime": "2026-11-20T06:55:06.795Z",
		"size": 345929,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (8).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (14).png": {
		"type": "image/png",
		"etag": "\"81ae1-M3/BAiF4/6xMyBhlwe/iPO/KR/o\"",
		"mtime": "2026-11-20T06:55:06.679Z",
		"size": 531169,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (14).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (15).png": {
		"type": "image/png",
		"etag": "\"b5cd7-kVQ4gXkNAQSaLiB7+9AhaCvnjWU\"",
		"mtime": "2026-11-20T06:55:06.679Z",
		"size": 744663,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (15).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (13).png": {
		"type": "image/png",
		"etag": "\"9eee6-z/8OfqIAMwhXwVGuNSnnquA9udw\"",
		"mtime": "2026-11-20T06:55:06.662Z",
		"size": 650982,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (13).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (3).png": {
		"type": "image/png",
		"etag": "\"8cf1e-k1rLJ65kB3eAtmHVvmKCj+znpw4\"",
		"mtime": "2026-11-20T06:55:06.747Z",
		"size": 577310,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (3).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (2).png": {
		"type": "image/png",
		"etag": "\"8f3a3-ZwDmgraRiqa7Fk5gKlLOQk0oZ4Y\"",
		"mtime": "2026-11-20T06:55:06.730Z",
		"size": 586659,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (2).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (5).png": {
		"type": "image/png",
		"etag": "\"8b7cf-+1P4aAa4b879BAyFm4Z7UOetJkg\"",
		"mtime": "2026-11-20T06:55:06.764Z",
		"size": 571343,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (5).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (11).png": {
		"type": "image/png",
		"etag": "\"f29ae-LDRqtWeT9Rc1BrHvnOer7agm/1I\"",
		"mtime": "2026-11-20T06:55:06.646Z",
		"size": 993710,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (11).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (4).png": {
		"type": "image/png",
		"etag": "\"addc9-pioz5BBUh+FieQMJlcDZr3DpX2c\"",
		"mtime": "2026-11-20T06:55:06.747Z",
		"size": 712137,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (4).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (6).png": {
		"type": "image/png",
		"etag": "\"a56d1-KyYSF0y4hOTroBhgUV2Yjof//vk\"",
		"mtime": "2026-11-20T06:55:06.778Z",
		"size": 677585,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (6).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (7).png": {
		"type": "image/png",
		"etag": "\"c59ce-2zRNInt4tGeHaUjCjGT/jKNoifQ\"",
		"mtime": "2026-11-20T06:55:06.779Z",
		"size": 809422,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (7).png"
	},
	"/ATHARV/ATHARV SECTION REFERENCE (18).png": {
		"type": "image/png",
		"etag": "\"141bbe-7YxpnQn8HFc3vsrIs6XT+LLCumk\"",
		"mtime": "2026-11-20T06:55:06.714Z",
		"size": 1317822,
		"path": "../public/ATHARV/ATHARV SECTION REFERENCE (18).png"
	},
	"/assets/interior-painting-finishing-CkEfXNEz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-UIQdU8YN7/4Rb7guvMyYssg2Tzg\"",
		"mtime": "2026-11-20T11:18:22.998Z",
		"size": 121,
		"path": "../public/assets/interior-painting-finishing-CkEfXNEz.js"
	},
	"/assets/projects-D34dRcBd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-R5RgNbftyMcc41MfaC0cy6n+mRg\"",
		"mtime": "2026-11-20T11:18:22.998Z",
		"size": 71,
		"path": "../public/assets/projects-D34dRcBd.js"
	},
	"/assets/index-BNIOTrEL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"783b2-VdQjWoJLK7ssl+lgvVITphR4/UA\"",
		"mtime": "2026-11-20T11:18:22.993Z",
		"size": 492466,
		"path": "../public/assets/index-BNIOTrEL.js"
	},
	"/assets/projects_._slug-98TFUYCE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-bW8dZsU54NJu16ydLH5OxvNuDOI\"",
		"mtime": "2026-11-20T11:18:22.998Z",
		"size": 209,
		"path": "../public/assets/projects_._slug-98TFUYCE.js"
	},
	"/assets/road-miscellaneous-civil-works-Ck3qULFe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-Ul7IEMYjwxvVgAn3+xc/fCuXe8Q\"",
		"mtime": "2026-11-20T11:18:22.998Z",
		"size": 121,
		"path": "../public/assets/road-miscellaneous-civil-works-Ck3qULFe.js"
	},
	"/assets/routes-CgzDxfVf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-Z90FNm4LpqazRo56+9MT8fa7BiE\"",
		"mtime": "2026-11-20T11:18:23.005Z",
		"size": 71,
		"path": "../public/assets/routes-CgzDxfVf.js"
	},
	"/assets/texture-pu-polishing-works-Z9V24xkM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-tFKp/5m9Ugx0dUHtfwVSRo1wbJE\"",
		"mtime": "2026-11-20T11:18:23.005Z",
		"size": 121,
		"path": "../public/assets/texture-pu-polishing-works-Z9V24xkM.js"
	},
	"/assets/services-C2bKCXlR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-eNpu0QqBNQYoSXLJ3LRXb4wBUyc\"",
		"mtime": "2026-11-20T11:18:23.005Z",
		"size": 71,
		"path": "../public/assets/services-C2bKCXlR.js"
	},
	"/assets/waterproofing-solutions-BLCBKiUq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-mdoE16Cf5hMifQCeoaEW/bCO8q4\"",
		"mtime": "2026-11-20T11:18:23.005Z",
		"size": 121,
		"path": "../public/assets/waterproofing-solutions-BLCBKiUq.js"
	},
	"/assets/styles-BYiOePm9.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"26271-sV1tQLIGCrDoT4oyyFWdetsxoWw\"",
		"mtime": "2026-11-20T11:18:23.005Z",
		"size": 156273,
		"path": "../public/assets/styles-BYiOePm9.css"
	},
	"/atharv-images/atharv-decorators-logo.webp": {
		"type": "image/webp",
		"etag": "\"4fca-XL1z8+Quf1AkisHjgIRMxZFcMtY\"",
		"mtime": "2026-11-19T14:05:11.786Z",
		"size": 20426,
		"path": "../public/atharv-images/atharv-decorators-logo.webp"
	},
	"/atharv-images/Atharv_Decorators_logo.webp": {
		"type": "image/webp",
		"etag": "\"4fca-XL1z8+Quf1AkisHjgIRMxZFcMtY\"",
		"mtime": "2026-11-19T14:06:27.622Z",
		"size": 20426,
		"path": "../public/atharv-images/Atharv_Decorators_logo.webp"
	},
	"/atharv-images/client-amazon.webp": {
		"type": "image/webp",
		"etag": "\"171a-pTXcMuOTTqR6m6EeLXlJxuuA4IU\"",
		"mtime": "2026-11-19T14:06:26.523Z",
		"size": 5914,
		"path": "../public/atharv-images/client-amazon.webp"
	},
	"/atharv-images/civil-repairs-maintenance.webp": {
		"type": "image/webp",
		"etag": "\"18c8e-lpVkboSWRfHK3VHOPE5D78GBAIU\"",
		"mtime": "2026-11-19T14:06:27.341Z",
		"size": 101518,
		"path": "../public/atharv-images/civil-repairs-maintenance.webp"
	},
	"/atharv-images/blueprint-pattern.png": {
		"type": "image/png",
		"etag": "\"2b1b6-pXtWM+igPZ/kFPxnDJQ5iwH3NgQ\"",
		"mtime": "2026-11-19T14:06:27.796Z",
		"size": 176566,
		"path": "../public/atharv-images/blueprint-pattern.png"
	},
	"/atharv-images/client-balsan-developers.webp": {
		"type": "image/webp",
		"etag": "\"115a-kSPdfAO0HW+ScRbO/GRQnfzVyfM\"",
		"mtime": "2026-11-19T14:06:27.748Z",
		"size": 4442,
		"path": "../public/atharv-images/client-balsan-developers.webp"
	},
	"/atharv-images/client-lt-construction.webp": {
		"type": "image/webp",
		"etag": "\"1b98-ftz39D3jRONg2v0m7EEy96ZpKyg\"",
		"mtime": "2026-11-19T14:06:26.966Z",
		"size": 7064,
		"path": "../public/atharv-images/client-lt-construction.webp"
	},
	"/atharv-images/client-r-galleria.webp": {
		"type": "image/webp",
		"etag": "\"2208-oYyCrfmhg7R1DRPNaDoxEd+FO3c\"",
		"mtime": "2026-11-19T14:06:26.357Z",
		"size": 8712,
		"path": "../public/atharv-images/client-r-galleria.webp"
	},
	"/atharv-images/client-msc-bank.webp": {
		"type": "image/webp",
		"etag": "\"42c4-jYL3WB7sJ5kOAZdn0Xirv9lftyw\"",
		"mtime": "2026-11-19T14:06:27.585Z",
		"size": 17092,
		"path": "../public/atharv-images/client-msc-bank.webp"
	},
	"/atharv-images/client-rebel-foods.webp": {
		"type": "image/webp",
		"etag": "\"12a4-x6T/icfYb8P0AKewx4t0E3dHs3U\"",
		"mtime": "2026-11-19T14:06:26.510Z",
		"size": 4772,
		"path": "../public/atharv-images/client-rebel-foods.webp"
	},
	"/atharv-images/client-man-infra.webp": {
		"type": "image/webp",
		"etag": "\"1a72-U4HNNjFiDxFchbBQyfY+FGfg3tg\"",
		"mtime": "2026-11-19T14:06:27.722Z",
		"size": 6770,
		"path": "../public/atharv-images/client-man-infra.webp"
	},
	"/atharv-images/client-runwal-greens.webp": {
		"type": "image/webp",
		"etag": "\"1624-30VG5x0dnpCwxJHnRJJOqCU/Xfw\"",
		"mtime": "2026-11-19T14:06:26.556Z",
		"size": 5668,
		"path": "../public/atharv-images/client-runwal-greens.webp"
	},
	"/atharv-images/client-taj.webp": {
		"type": "image/webp",
		"etag": "\"10ca-v939U8ej/a6tpwsgdCWf5ZaIg0o\"",
		"mtime": "2026-11-19T14:06:27.089Z",
		"size": 4298,
		"path": "../public/atharv-images/client-taj.webp"
	},
	"/atharv-images/client-talwalkars.webp": {
		"type": "image/webp",
		"etag": "\"15ca-DxYZKP1yWKvmk2/knCoagbJO1gI\"",
		"mtime": "2026-11-19T14:06:26.989Z",
		"size": 5578,
		"path": "../public/atharv-images/client-talwalkars.webp"
	},
	"/atharv-images/client-turner.webp": {
		"type": "image/webp",
		"etag": "\"d60-V5rgha6rrWaSIULcLyNtax5d++o\"",
		"mtime": "2026-11-19T14:06:26.415Z",
		"size": 3424,
		"path": "../public/atharv-images/client-turner.webp"
	},
	"/atharv-images/client-unity-construction.webp": {
		"type": "image/webp",
		"etag": "\"18f2-K4di29EWvx1hiv8EqPpUOZeFMnQ\"",
		"mtime": "2026-11-19T14:06:27.139Z",
		"size": 6386,
		"path": "../public/atharv-images/client-unity-construction.webp"
	},
	"/atharv-images/commercial-construction.webp": {
		"type": "image/webp",
		"etag": "\"25a07-dXoFKCH9zuKO6T8Z45wOUhmIesw\"",
		"mtime": "2026-11-19T14:05:11.830Z",
		"size": 154119,
		"path": "../public/atharv-images/commercial-construction.webp"
	},
	"/atharv-images/commercial-glass-building.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c8b1-1DhBXgpi7DVgmpeRiDbHslpttgs\"",
		"mtime": "2026-11-19T14:05:11.849Z",
		"size": 182449,
		"path": "../public/atharv-images/commercial-glass-building.jpg"
	},
	"/atharv-images/construction-skyline.jpg": {
		"type": "image/jpeg",
		"etag": "\"34331-PMjjvIvh6K2Rfoa+2M5gbW15iqM\"",
		"mtime": "2026-11-19T14:05:11.879Z",
		"size": 213809,
		"path": "../public/atharv-images/construction-skyline.jpg"
	},
	"/atharv-images/curved-civic-building.jpg": {
		"type": "image/jpeg",
		"etag": "\"243a0-UZaq0gtrRDn4dS0vxJ2X3OUeF7U\"",
		"mtime": "2026-11-19T14:05:11.915Z",
		"size": 148384,
		"path": "../public/atharv-images/curved-civic-building.jpg"
	},
	"/atharv-images/exterior-building-restoration.webp": {
		"type": "image/webp",
		"etag": "\"14348-ajCoH6Ku+r9eCYjGsSvbHoBCmnw\"",
		"mtime": "2026-11-19T14:05:11.938Z",
		"size": 82760,
		"path": "../public/atharv-images/exterior-building-restoration.webp"
	},
	"/atharv-images/engineers-architects-site.jpg": {
		"type": "image/jpeg",
		"etag": "\"338dd-0BiYqmE9PwDTcnShsgkUyufqzbs\"",
		"mtime": "2026-11-20T06:41:48.958Z",
		"size": 211165,
		"path": "../public/atharv-images/engineers-architects-site.jpg"
	},
	"/atharv-images/exterior-painting-repairing.webp": {
		"type": "image/webp",
		"etag": "\"14348-ajCoH6Ku+r9eCYjGsSvbHoBCmnw\"",
		"mtime": "2026-11-19T14:06:26.033Z",
		"size": 82760,
		"path": "../public/atharv-images/exterior-painting-repairing.webp"
	},
	"/atharv-images/hero-video-poster.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca80-Cvzi0f8rN21LhE8cwclfOmIGX5E\"",
		"mtime": "2026-11-20T07:21:35.878Z",
		"size": 51840,
		"path": "../public/atharv-images/hero-video-poster.jpg"
	},
	"/atharv-images/icon-commercial.png": {
		"type": "image/png",
		"etag": "\"b96-DsT/mGB1lTae1w2K/mYclrE6xkg\"",
		"mtime": "2026-11-19T14:06:27.389Z",
		"size": 2966,
		"path": "../public/atharv-images/icon-commercial.png"
	},
	"/atharv-images/icon-hospitality.png": {
		"type": "image/png",
		"etag": "\"34ea-xUfB94W/K/3mXocWv3PqrLoiXKQ\"",
		"mtime": "2026-11-19T14:06:27.972Z",
		"size": 13546,
		"path": "../public/atharv-images/icon-hospitality.png"
	},
	"/atharv-images/icon-multipurpose.png": {
		"type": "image/png",
		"etag": "\"26ee-jn5o7GEp+uVDxhqXpldNmtCPin4\"",
		"mtime": "2026-11-19T14:06:27.606Z",
		"size": 9966,
		"path": "../public/atharv-images/icon-multipurpose.png"
	},
	"/atharv-images/icon-residential.png": {
		"type": "image/png",
		"etag": "\"1c5c-K7t++KFNAR+L81y1kEIgWt/Exho\"",
		"mtime": "2026-11-19T14:06:26.207Z",
		"size": 7260,
		"path": "../public/atharv-images/icon-residential.png"
	},
	"/atharv-images/icon-service-1.svg": {
		"type": "image/svg+xml",
		"etag": "\"260-98dugtziXAy4+IbloI48WTqKRfk\"",
		"mtime": "2026-11-19T14:06:25.907Z",
		"size": 608,
		"path": "../public/atharv-images/icon-service-1.svg"
	},
	"/atharv-images/icon-service-3.svg": {
		"type": "image/svg+xml",
		"etag": "\"1fa-3fc+YNnyFU87zfQxqKOAp7ccZSc\"",
		"mtime": "2026-11-19T14:06:26.001Z",
		"size": 506,
		"path": "../public/atharv-images/icon-service-3.svg"
	},
	"/atharv-images/icon-service-2.svg": {
		"type": "image/svg+xml",
		"etag": "\"1e7-91lzyGYozISUcN1XbpVaTU6amGg\"",
		"mtime": "2026-11-19T14:06:25.970Z",
		"size": 487,
		"path": "../public/atharv-images/icon-service-2.svg"
	},
	"/atharv-images/icon-service-4.svg": {
		"type": "image/svg+xml",
		"etag": "\"1ac-qlubWS9v9G5+G5hs9SQV/5+uwSE\"",
		"mtime": "2026-11-19T14:06:25.940Z",
		"size": 428,
		"path": "../public/atharv-images/icon-service-4.svg"
	},
	"/atharv-images/interior-painting-finishing.webp": {
		"type": "image/webp",
		"etag": "\"b28e-NIf96+CGoz6wp3sB3T/Vuo/KZiM\"",
		"mtime": "2026-11-19T14:05:11.956Z",
		"size": 45710,
		"path": "../public/atharv-images/interior-painting-finishing.webp"
	},
	"/atharv-images/interior-painting-hero.webp": {
		"type": "image/webp",
		"etag": "\"b28e-NIf96+CGoz6wp3sB3T/Vuo/KZiM\"",
		"mtime": "2026-11-19T14:06:27.923Z",
		"size": 45710,
		"path": "../public/atharv-images/interior-painting-hero.webp"
	},
	"/atharv-images/modern-architectural-facade.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e6b8-PY/emD+DfLgKs6JM3j8jzrfY/vg\"",
		"mtime": "2026-11-19T14:05:11.985Z",
		"size": 124600,
		"path": "../public/atharv-images/modern-architectural-facade.jpg"
	},
	"/atharv-images/project-angular-building.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1e6b8-PY/emD+DfLgKs6JM3j8jzrfY/vg\"",
		"mtime": "2026-11-19T14:06:27.372Z",
		"size": 124600,
		"path": "../public/atharv-images/project-angular-building.jpeg"
	},
	"/atharv-images/modern-atrium.jpg": {
		"type": "image/jpeg",
		"etag": "\"25588-d2GQpxrpmtohH9Go9muNrMWK5Ig\"",
		"mtime": "2026-11-19T14:05:12.009Z",
		"size": 152968,
		"path": "../public/atharv-images/modern-atrium.jpg"
	},
	"/atharv-images/project-curved-architecture.jpeg": {
		"type": "image/jpeg",
		"etag": "\"25588-d2GQpxrpmtohH9Go9muNrMWK5Ig\"",
		"mtime": "2026-11-19T14:06:27.197Z",
		"size": 152968,
		"path": "../public/atharv-images/project-curved-architecture.jpeg"
	},
	"/atharv-images/project-excavator-action.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1ec76-GjTepnZNevsunlMixVGTxFhsCoQ\"",
		"mtime": "2026-11-19T14:06:26.306Z",
		"size": 126070,
		"path": "../public/atharv-images/project-excavator-action.jpeg"
	},
	"/atharv-images/project-futuristic-building.jpeg": {
		"type": "image/jpeg",
		"etag": "\"243a0-UZaq0gtrRDn4dS0vxJ2X3OUeF7U\"",
		"mtime": "2026-11-19T14:06:27.251Z",
		"size": 148384,
		"path": "../public/atharv-images/project-futuristic-building.jpeg"
	},
	"/atharv-images/project-glass-building.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2c8b1-1DhBXgpi7DVgmpeRiDbHslpttgs\"",
		"mtime": "2026-11-19T14:06:27.489Z",
		"size": 182449,
		"path": "../public/atharv-images/project-glass-building.jpeg"
	},
	"/atharv-images/project-site-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"243a0-UZaq0gtrRDn4dS0vxJ2X3OUeF7U\"",
		"mtime": "2026-11-20T08:55:06.078Z",
		"size": 148384,
		"path": "../public/atharv-images/project-site-1.jpg"
	},
	"/atharv-images/project-site-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c8b1-1DhBXgpi7DVgmpeRiDbHslpttgs\"",
		"mtime": "2026-11-20T08:54:53.960Z",
		"size": 182449,
		"path": "../public/atharv-images/project-site-2.jpg"
	},
	"/atharv-images/project-site-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"25588-d2GQpxrpmtohH9Go9muNrMWK5Ig\"",
		"mtime": "2026-11-20T08:54:42.138Z",
		"size": 152968,
		"path": "../public/atharv-images/project-site-3.jpg"
	},
	"/atharv-images/project-modern-architecture.jpeg": {
		"type": "image/jpeg",
		"etag": "\"17f83-kZpI9dTUAaZ9dY1xRmEIpYVqgVw\"",
		"mtime": "2026-11-19T14:06:26.741Z",
		"size": 98179,
		"path": "../public/atharv-images/project-modern-architecture.jpeg"
	},
	"/atharv-images/project-site-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e6b8-PY/emD+DfLgKs6JM3j8jzrfY/vg\"",
		"mtime": "2026-11-20T08:54:31.906Z",
		"size": 124600,
		"path": "../public/atharv-images/project-site-4.jpg"
	},
	"/atharv-images/project-site-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"313da-KfU2MUVnIBzpfv/EyJpJdVxofKA\"",
		"mtime": "2026-11-20T08:54:04.413Z",
		"size": 201690,
		"path": "../public/atharv-images/project-site-6.jpg"
	},
	"/atharv-images/project-site-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"17f83-kZpI9dTUAaZ9dY1xRmEIpYVqgVw\"",
		"mtime": "2026-11-20T08:54:23.627Z",
		"size": 98179,
		"path": "../public/atharv-images/project-site-5.jpg"
	},
	"/atharv-images/project-site-8.jpg": {
		"type": "image/jpeg",
		"etag": "\"16284-AoNjZ2ypa77kedqsDqMxDEhAUF8\"",
		"mtime": "2026-11-20T08:53:35.074Z",
		"size": 90756,
		"path": "../public/atharv-images/project-site-8.jpg"
	},
	"/atharv-images/project-site-7.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ed26-ldkLMzkM/2B+oDWhGkSYO0RgXkY\"",
		"mtime": "2026-11-20T08:53:49.130Z",
		"size": 257318,
		"path": "../public/atharv-images/project-site-7.jpg"
	},
	"/atharv-images/project-site-9.jpg": {
		"type": "image/jpeg",
		"etag": "\"27d11-8S+JOC890rXea6egwbvXypWDA9I\"",
		"mtime": "2026-11-20T08:56:50.289Z",
		"size": 163089,
		"path": "../public/atharv-images/project-site-9.jpg"
	},
	"/atharv-images/project-site-architects.jpeg": {
		"type": "image/jpeg",
		"etag": "\"bdb6-AaCylKxfVhZ/+1ODrvjqSC/qStM\"",
		"mtime": "2026-11-19T14:06:27.309Z",
		"size": 48566,
		"path": "../public/atharv-images/project-site-architects.jpeg"
	},
	"/atharv-images/project-team-site.jpg": {
		"type": "image/jpeg",
		"etag": "\"e422-ifY2GIboXyZGsV6RUN3moQC2MzY\"",
		"mtime": "2026-11-19T14:05:12.027Z",
		"size": 58402,
		"path": "../public/atharv-images/project-team-site.jpg"
	},
	"/atharv-images/projects-commercial-towers.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"25a07-dXoFKCH9zuKO6T8Z45wOUhmIesw\"",
		"mtime": "2026-11-19T14:05:12.051Z",
		"size": 154119,
		"path": "../public/atharv-images/projects-commercial-towers.jpg.jpeg"
	},
	"/atharv-images/project-tower-site.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3f3ed-+7JFesbTLOUF5oTYzKO6G0YSo6Q\"",
		"mtime": "2026-11-19T14:06:27.283Z",
		"size": 259053,
		"path": "../public/atharv-images/project-tower-site.jpeg"
	},
	"/atharv-images/projects-construction-team.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e422-ifY2GIboXyZGsV6RUN3moQC2MzY\"",
		"mtime": "2026-11-19T14:05:12.066Z",
		"size": 58402,
		"path": "../public/atharv-images/projects-construction-team.jpg.jpeg"
	},
	"/atharv-images/project-towers-construction.jpeg": {
		"type": "image/jpeg",
		"etag": "\"40e13-6ag9JzGgIXw6Ni5Llo9UdynJkj0\"",
		"mtime": "2026-11-19T14:06:27.700Z",
		"size": 265747,
		"path": "../public/atharv-images/project-towers-construction.jpeg"
	},
	"/atharv-images/projects-excavation.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"108a8-zmHtGbbSvOsEsEECEOJzAtlMXlY\"",
		"mtime": "2026-11-19T14:05:12.094Z",
		"size": 67752,
		"path": "../public/atharv-images/projects-excavation.jpg.jpeg"
	},
	"/atharv-images/projects-facade-restoration.webp": {
		"type": "image/webp",
		"etag": "\"14348-ajCoH6Ku+r9eCYjGsSvbHoBCmnw\"",
		"mtime": "2026-11-19T14:05:12.149Z",
		"size": 82760,
		"path": "../public/atharv-images/projects-facade-restoration.webp"
	},
	"/atharv-images/projects-interior-finish.webp": {
		"type": "image/webp",
		"etag": "\"b28e-NIf96+CGoz6wp3sB3T/Vuo/KZiM\"",
		"mtime": "2026-11-19T14:05:12.212Z",
		"size": 45710,
		"path": "../public/atharv-images/projects-interior-finish.webp"
	},
	"/atharv-images/projects-glass-office.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2c8b1-1DhBXgpi7DVgmpeRiDbHslpttgs\"",
		"mtime": "2026-11-19T14:05:12.192Z",
		"size": 182449,
		"path": "../public/atharv-images/projects-glass-office.jpg.jpeg"
	},
	"/atharv-images/projects-road-construction.webp": {
		"type": "image/webp",
		"etag": "\"1945c-54K5TJgtPuEDAHlsLfydsbrRDAQ\"",
		"mtime": "2026-11-19T14:05:12.228Z",
		"size": 103516,
		"path": "../public/atharv-images/projects-road-construction.webp"
	},
	"/atharv-images/projects-sculptural-building.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"17f83-kZpI9dTUAaZ9dY1xRmEIpYVqgVw\"",
		"mtime": "2026-11-19T14:05:12.244Z",
		"size": 98179,
		"path": "../public/atharv-images/projects-sculptural-building.jpg.jpeg"
	},
	"/atharv-images/projects-structural-repairs.webp": {
		"type": "image/webp",
		"etag": "\"18c8e-lpVkboSWRfHK3VHOPE5D78GBAIU\"",
		"mtime": "2026-11-19T14:05:12.276Z",
		"size": 101518,
		"path": "../public/atharv-images/projects-structural-repairs.webp"
	},
	"/atharv-images/projects-texture-finish.webp": {
		"type": "image/webp",
		"etag": "\"7cd2-bv9cRZdgI/okponOfQiVIZp3/UM\"",
		"mtime": "2026-11-19T14:05:12.294Z",
		"size": 31954,
		"path": "../public/atharv-images/projects-texture-finish.webp"
	},
	"/atharv-images/projects-waterproofing.webp": {
		"type": "image/webp",
		"etag": "\"1a382-C91ilxLmOwPwcIecdCUG3/iHieI\"",
		"mtime": "2026-11-19T14:05:12.308Z",
		"size": 107394,
		"path": "../public/atharv-images/projects-waterproofing.webp"
	},
	"/atharv-images/road-civil-works-hero.webp": {
		"type": "image/webp",
		"etag": "\"1945c-54K5TJgtPuEDAHlsLfydsbrRDAQ\"",
		"mtime": "2026-11-19T14:06:27.898Z",
		"size": 103516,
		"path": "../public/atharv-images/road-civil-works-hero.webp"
	},
	"/atharv-images/road-civil-works.webp": {
		"type": "image/webp",
		"etag": "\"1945c-54K5TJgtPuEDAHlsLfydsbrRDAQ\"",
		"mtime": "2026-11-19T14:05:12.339Z",
		"size": 103516,
		"path": "../public/atharv-images/road-civil-works.webp"
	},
	"/atharv-images/structural-repairs.webp": {
		"type": "image/webp",
		"etag": "\"18c8e-lpVkboSWRfHK3VHOPE5D78GBAIU\"",
		"mtime": "2026-11-19T14:05:12.355Z",
		"size": 101518,
		"path": "../public/atharv-images/structural-repairs.webp"
	},
	"/atharv-images/team-member-1.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5a17-nPrV2o7iGzbUuHIF2jbgGAxYlXo\"",
		"mtime": "2026-11-19T14:06:26.827Z",
		"size": 23063,
		"path": "../public/atharv-images/team-member-1.jpeg"
	},
	"/atharv-images/team-member-2.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6db4-fKygPPxiIExo3YXnVqSoGT3XeD0\"",
		"mtime": "2026-11-19T14:06:27.939Z",
		"size": 28084,
		"path": "../public/atharv-images/team-member-2.jpeg"
	},
	"/atharv-images/texture-polishing.webp": {
		"type": "image/webp",
		"etag": "\"7cd2-bv9cRZdgI/okponOfQiVIZp3/UM\"",
		"mtime": "2026-11-19T14:05:12.377Z",
		"size": 31954,
		"path": "../public/atharv-images/texture-polishing.webp"
	},
	"/atharv-images/team-member-3.jpeg": {
		"type": "image/jpeg",
		"etag": "\"62f9-63rLGGwuOfeIF50zDMZkHLeXBLs\"",
		"mtime": "2026-11-19T14:06:26.923Z",
		"size": 25337,
		"path": "../public/atharv-images/team-member-3.jpeg"
	},
	"/atharv-images/texture-pu-polishing.webp": {
		"type": "image/webp",
		"etag": "\"7cd2-bv9cRZdgI/okponOfQiVIZp3/UM\"",
		"mtime": "2026-11-19T14:06:27.467Z",
		"size": 31954,
		"path": "../public/atharv-images/texture-pu-polishing.webp"
	},
	"/atharv-images/unsplash-corporate-atrium.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cb87-ux8MPal9megyMPHA0MS6xKkxXcI\"",
		"mtime": "2026-11-20T06:42:47.770Z",
		"size": 117639,
		"path": "../public/atharv-images/unsplash-corporate-atrium.jpg"
	},
	"/atharv-images/unsplash-architect-blueprints.jpg": {
		"type": "image/jpeg",
		"etag": "\"17c01-BKNSifdHzYlzgWtgf0XOav6ec24\"",
		"mtime": "2026-11-20T06:42:46.927Z",
		"size": 97281,
		"path": "../public/atharv-images/unsplash-architect-blueprints.jpg"
	},
	"/atharv-images/unsplash-luxury-facade.jpg": {
		"type": "image/jpeg",
		"etag": "\"348ab-/CRMNezi17EiB21LSWbrDveBs/E\"",
		"mtime": "2026-11-20T06:42:47.254Z",
		"size": 215211,
		"path": "../public/atharv-images/unsplash-luxury-facade.jpg"
	},
	"/atharv-images/unsplash-modern-interior.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ab7d-ihl53LWTIGasUcyeSpZbEcVn8aY\"",
		"mtime": "2026-11-20T06:42:47.570Z",
		"size": 240509,
		"path": "../public/atharv-images/unsplash-modern-interior.jpg"
	},
	"/atharv-images/waterproofing-solutions.webp": {
		"type": "image/webp",
		"etag": "\"1a382-C91ilxLmOwPwcIecdCUG3/iHieI\"",
		"mtime": "2026-11-19T14:06:27.672Z",
		"size": 107394,
		"path": "../public/atharv-images/waterproofing-solutions.webp"
	},
	"/atharv-images/unsplash-tower-construction.jpg": {
		"type": "image/jpeg",
		"etag": "\"3180b-qIoofpC3BNKBw1q2UgCOALdzLIE\"",
		"mtime": "2026-11-20T06:43:15.515Z",
		"size": 202763,
		"path": "../public/atharv-images/unsplash-tower-construction.jpg"
	},
	"/atharv-images/waterproofing.webp": {
		"type": "image/webp",
		"etag": "\"1a382-C91ilxLmOwPwcIecdCUG3/iHieI\"",
		"mtime": "2026-11-19T14:05:12.403Z",
		"size": 107394,
		"path": "../public/atharv-images/waterproofing.webp"
	},
	"/PROJECTS IMAGES/PROJECTSITES (2).jpg": {
		"type": "image/jpeg",
		"etag": "\"2c8b1-1DhBXgpi7DVgmpeRiDbHslpttgs\"",
		"mtime": "2026-11-20T08:54:53.960Z",
		"size": 182449,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (2).jpg"
	},
	"/PROJECTS IMAGES/PROJECTSITES (3).jpg": {
		"type": "image/jpeg",
		"etag": "\"25588-d2GQpxrpmtohH9Go9muNrMWK5Ig\"",
		"mtime": "2026-11-20T08:54:42.138Z",
		"size": 152968,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (3).jpg"
	},
	"/PROJECTS IMAGES/PROJECTSITES (4).jpg": {
		"type": "image/jpeg",
		"etag": "\"1e6b8-PY/emD+DfLgKs6JM3j8jzrfY/vg\"",
		"mtime": "2026-11-20T08:54:31.906Z",
		"size": 124600,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (4).jpg"
	},
	"/PROJECTS IMAGES/PROJECTSITES (5).jpg": {
		"type": "image/jpeg",
		"etag": "\"17f83-kZpI9dTUAaZ9dY1xRmEIpYVqgVw\"",
		"mtime": "2026-11-20T08:54:23.627Z",
		"size": 98179,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (5).jpg"
	},
	"/PROJECTS IMAGES/PROJECTSITES (1).jpg": {
		"type": "image/jpeg",
		"etag": "\"243a0-UZaq0gtrRDn4dS0vxJ2X3OUeF7U\"",
		"mtime": "2026-11-20T08:55:06.078Z",
		"size": 148384,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (1).jpg"
	},
	"/PROJECTS IMAGES/PROJECTSITES (6).jpg": {
		"type": "image/jpeg",
		"etag": "\"313da-KfU2MUVnIBzpfv/EyJpJdVxofKA\"",
		"mtime": "2026-11-20T08:54:04.413Z",
		"size": 201690,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (6).jpg"
	},
	"/PROJECTS IMAGES/PROJECTSITES (7).jpg": {
		"type": "image/jpeg",
		"etag": "\"3ed26-ldkLMzkM/2B+oDWhGkSYO0RgXkY\"",
		"mtime": "2026-11-20T08:53:49.130Z",
		"size": 257318,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (7).jpg"
	},
	"/PROJECTS IMAGES/PROJECTSITES (8).jpg": {
		"type": "image/jpeg",
		"etag": "\"16284-AoNjZ2ypa77kedqsDqMxDEhAUF8\"",
		"mtime": "2026-11-20T08:53:35.074Z",
		"size": 90756,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (8).jpg"
	},
	"/PROJECTS IMAGES/PROJECTSITES (9).jpg": {
		"type": "image/jpeg",
		"etag": "\"27d11-8S+JOC890rXea6egwbvXypWDA9I\"",
		"mtime": "2026-11-20T08:56:50.289Z",
		"size": 163089,
		"path": "../public/PROJECTS IMAGES/PROJECTSITES (9).jpg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/10-150x150.webp": {
		"type": "image/webp",
		"etag": "\"9f6-RlPF/jdoTL3l/TtpSpxE+1/dV20\"",
		"mtime": "2026-11-19T14:06:26.106Z",
		"size": 2550,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/10-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/10.webp": {
		"type": "image/webp",
		"etag": "\"171a-pTXcMuOTTqR6m6EeLXlJxuuA4IU\"",
		"mtime": "2026-11-19T14:06:26.523Z",
		"size": 5914,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/10.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/10-300x300.webp": {
		"type": "image/webp",
		"etag": "\"107c-lP5GnPbs0bhL/+L8WycmhRvkyOY\"",
		"mtime": "2026-11-19T14:06:26.439Z",
		"size": 4220,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/10-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/11-150x150.webp": {
		"type": "image/webp",
		"etag": "\"682-oQljzYvvQTn59sqAd17E79iUF/g\"",
		"mtime": "2026-11-19T14:06:26.184Z",
		"size": 1666,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/11-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/11-300x300.webp": {
		"type": "image/webp",
		"etag": "\"b9e-pYuFMh8Heuhi+BBIQcJtc4lSSn4\"",
		"mtime": "2026-11-19T14:06:27.560Z",
		"size": 2974,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/11-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/11.webp": {
		"type": "image/webp",
		"etag": "\"115a-kSPdfAO0HW+ScRbO/GRQnfzVyfM\"",
		"mtime": "2026-11-19T14:06:27.748Z",
		"size": 4442,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/11.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/12-150x150.webp": {
		"type": "image/webp",
		"etag": "\"882-D5y7vGsfidT5MuBp04yWdHszSB4\"",
		"mtime": "2026-11-19T14:06:27.769Z",
		"size": 2178,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/12-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/12-300x300.webp": {
		"type": "image/webp",
		"etag": "\"dd0-FVTdp1qUo7nNdEnpGiHCZh1Jsbs\"",
		"mtime": "2026-11-19T14:06:27.017Z",
		"size": 3536,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/12-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/13-150x150.webp": {
		"type": "image/webp",
		"etag": "\"872-CJuPWsJVfksQsQJbNObMqYcRiOo\"",
		"mtime": "2026-11-19T14:06:27.439Z",
		"size": 2162,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/13-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/12.webp": {
		"type": "image/webp",
		"etag": "\"12a4-x6T/icfYb8P0AKewx4t0E3dHs3U\"",
		"mtime": "2026-11-19T14:06:26.510Z",
		"size": 4772,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/12.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/14-150x150.webp": {
		"type": "image/webp",
		"etag": "\"d8c-yTboFM3eNkGKX7leH28Ip03Onsw\"",
		"mtime": "2026-11-19T14:06:26.257Z",
		"size": 3468,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/14-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/13-300x300.webp": {
		"type": "image/webp",
		"etag": "\"f1e-sBFLK4qLkNcDQ2K9Tj8buPVmDr8\"",
		"mtime": "2026-11-19T14:06:26.946Z",
		"size": 3870,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/13-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/13.webp": {
		"type": "image/webp",
		"etag": "\"1624-30VG5x0dnpCwxJHnRJJOqCU/Xfw\"",
		"mtime": "2026-11-19T14:06:26.556Z",
		"size": 5668,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/13.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/14-300x300.webp": {
		"type": "image/webp",
		"etag": "\"1882-KNWeQ2huvDj78EP2kjW53+Asp+4\"",
		"mtime": "2026-11-19T14:06:27.416Z",
		"size": 6274,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/14-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/3-150x150.webp": {
		"type": "image/webp",
		"etag": "\"5ee-HPUVibbmUi0mjkWwWyoZueev+YU\"",
		"mtime": "2026-11-19T14:06:27.164Z",
		"size": 1518,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/3-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/14.webp": {
		"type": "image/webp",
		"etag": "\"2208-oYyCrfmhg7R1DRPNaDoxEd+FO3c\"",
		"mtime": "2026-11-19T14:06:26.357Z",
		"size": 8712,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/14.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/4-150x150.webp": {
		"type": "image/webp",
		"etag": "\"108a-xdPvcUuX8+WtMQxxZsUFpgM7Sx4\"",
		"mtime": "2026-11-19T14:06:26.157Z",
		"size": 4234,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/4-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/4-300x300.webp": {
		"type": "image/webp",
		"etag": "\"28e6-uy3MxY5epchfilxapg7DmwsTyjs\"",
		"mtime": "2026-11-19T14:06:27.106Z",
		"size": 10470,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/4-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/3-300x300.webp": {
		"type": "image/webp",
		"etag": "\"b00-/Ne+DKxEv+CrzJu/nWh53TZINb4\"",
		"mtime": "2026-11-19T14:06:27.039Z",
		"size": 2816,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/3-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/3.webp": {
		"type": "image/webp",
		"etag": "\"10ca-v939U8ej/a6tpwsgdCWf5ZaIg0o\"",
		"mtime": "2026-11-19T14:06:27.089Z",
		"size": 4298,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/3.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/4.webp": {
		"type": "image/webp",
		"etag": "\"42c4-jYL3WB7sJ5kOAZdn0Xirv9lftyw\"",
		"mtime": "2026-11-19T14:06:27.585Z",
		"size": 17092,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/4.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/40ee2698-e9ca-4779-b93c-4a2f418f625f.svg": {
		"type": "image/svg+xml",
		"etag": "\"260-98dugtziXAy4+IbloI48WTqKRfk\"",
		"mtime": "2026-11-19T14:06:25.907Z",
		"size": 608,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/40ee2698-e9ca-4779-b93c-4a2f418f625f.svg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/5-150x150.webp": {
		"type": "image/webp",
		"etag": "\"8fa-UVgAjnQZsqhyXxOuBj9tRT+VnA8\"",
		"mtime": "2026-11-19T14:06:26.340Z",
		"size": 2298,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/5-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/5-300x300.webp": {
		"type": "image/webp",
		"etag": "\"10a8-/cwoYTEFlrAmVryyxONR+tIxCGk\"",
		"mtime": "2026-11-19T14:06:27.219Z",
		"size": 4264,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/5-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/5.webp": {
		"type": "image/webp",
		"etag": "\"15ca-DxYZKP1yWKvmk2/knCoagbJO1gI\"",
		"mtime": "2026-11-19T14:06:26.989Z",
		"size": 5578,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/5.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/6-300x300.webp": {
		"type": "image/webp",
		"etag": "\"13f2-MNPtuY8NvQtAKuAJWvcmqo1NeLU\"",
		"mtime": "2026-11-19T14:06:26.889Z",
		"size": 5106,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/6-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/6-150x150.webp": {
		"type": "image/webp",
		"etag": "\"a16-/QPADCNWZB85uk5/2aKq67a5tMo\"",
		"mtime": "2026-11-19T14:06:26.457Z",
		"size": 2582,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/6-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/6.webp": {
		"type": "image/webp",
		"etag": "\"1b98-ftz39D3jRONg2v0m7EEy96ZpKyg\"",
		"mtime": "2026-11-19T14:06:26.966Z",
		"size": 7064,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/6.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/688fna1pwoq.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"17f83-kZpI9dTUAaZ9dY1xRmEIpYVqgVw\"",
		"mtime": "2026-11-19T14:06:26.741Z",
		"size": 98179,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/688fna1pwoq.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/7-150x150.webp": {
		"type": "image/webp",
		"etag": "\"9ee-fw4YjkVfBzSuzIJBJIP/jlrAzuY\"",
		"mtime": "2026-11-19T14:06:27.537Z",
		"size": 2542,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/7-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/7-300x300.webp": {
		"type": "image/webp",
		"etag": "\"136a-3usFTJexUrMKQdPoyu00gj7si28\"",
		"mtime": "2026-11-19T14:06:26.056Z",
		"size": 4970,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/7-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/7.webp": {
		"type": "image/webp",
		"etag": "\"1a72-U4HNNjFiDxFchbBQyfY+FGfg3tg\"",
		"mtime": "2026-11-19T14:06:27.722Z",
		"size": 6770,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/7.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/8-150x150.webp": {
		"type": "image/webp",
		"etag": "\"9c2-ULHP0Jft6NYInSPP8kUa6xCjHP4\"",
		"mtime": "2026-11-19T14:06:27.511Z",
		"size": 2498,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/8-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/8-300x300.webp": {
		"type": "image/webp",
		"etag": "\"11ae-xJ7SLrYKT3EgqTQoDVi7AvcaeOg\"",
		"mtime": "2026-11-19T14:06:27.056Z",
		"size": 4526,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/8-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/8.webp": {
		"type": "image/webp",
		"etag": "\"18f2-K4di29EWvx1hiv8EqPpUOZeFMnQ\"",
		"mtime": "2026-11-19T14:06:27.139Z",
		"size": 6386,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/8.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/9-300x300.webp": {
		"type": "image/webp",
		"etag": "\"ab2-705+jUhX0bi+8ULR6CUkG4Sb6B4\"",
		"mtime": "2026-11-19T14:06:27.817Z",
		"size": 2738,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/9-300x300.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/9-150x150.webp": {
		"type": "image/webp",
		"etag": "\"71e-RChkx2xHNJIMn+dOukdwOUTbSfA\"",
		"mtime": "2026-11-19T14:06:26.090Z",
		"size": 1822,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/9-150x150.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/9.webp": {
		"type": "image/webp",
		"etag": "\"d60-V5rgha6rrWaSIULcLyNtax5d++o\"",
		"mtime": "2026-11-19T14:06:26.415Z",
		"size": 3424,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/9.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8-300x169.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2fdc-GnupoohfYw8d3UpdyxWroYzBVMo\"",
		"mtime": "2026-11-19T14:06:27.839Z",
		"size": 12252,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8-300x169.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8-1024x576.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1a14a-90PXazKHB4U+Ipn450EhYDQwL2g\"",
		"mtime": "2026-11-19T14:06:26.839Z",
		"size": 106826,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8-1024x576.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8-1536x864.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"34331-PMjjvIvh6K2Rfoa+2M5gbW15iqM\"",
		"mtime": "2026-11-19T14:06:26.713Z",
		"size": 213809,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8-1536x864.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/a3e1900d-0581-45b5-b94c-8f5dd9c8087a.svg": {
		"type": "image/svg+xml",
		"etag": "\"1e7-91lzyGYozISUcN1XbpVaTU6amGg\"",
		"mtime": "2026-11-19T14:06:25.970Z",
		"size": 487,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/a3e1900d-0581-45b5-b94c-8f5dd9c8087a.svg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8-768x432.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"f91f-5uSBIUZUHE1qFYAlD/sWuyeRbU4\"",
		"mtime": "2026-11-19T14:06:27.872Z",
		"size": 63775,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8-768x432.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/architectural-structure.png": {
		"type": "image/png",
		"etag": "\"34ea-xUfB94W/K/3mXocWv3PqrLoiXKQ\"",
		"mtime": "2026-11-19T14:06:27.972Z",
		"size": 13546,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/architectural-structure.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"40e13-6ag9JzGgIXw6Ni5Llo9UdynJkj0\"",
		"mtime": "2026-11-19T14:06:27.700Z",
		"size": 265747,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/91aqt9p4mo8.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/architectural-structure-150x150.png": {
		"type": "image/png",
		"etag": "\"27dc-U1WQzr3C6JwUQlGbog4mdXqJd3w\"",
		"mtime": "2026-11-19T14:06:26.798Z",
		"size": 10204,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/architectural-structure-150x150.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Asset-2-100-1-e1660896849159.png": {
		"type": "image/png",
		"etag": "\"2b1b6-pXtWM+igPZ/kFPxnDJQ5iwH3NgQ\"",
		"mtime": "2026-11-19T14:06:27.796Z",
		"size": 176566,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Asset-2-100-1-e1660896849159.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Atharv_Decorators_logo.webp": {
		"type": "image/webp",
		"etag": "\"4fca-XL1z8+Quf1AkisHjgIRMxZFcMtY\"",
		"mtime": "2026-11-19T14:06:27.622Z",
		"size": 20426,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Atharv_Decorators_logo.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/BG-Worldmap.png": {
		"type": "image/png",
		"etag": "\"6539f-lKS+TfKz3AcGQZfvTSRdX4WRY44\"",
		"mtime": "2026-11-19T14:06:26.598Z",
		"size": 414623,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/BG-Worldmap.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building-150x150.png": {
		"type": "image/png",
		"etag": "\"bf0-zIx5tWLg7A0o/Vg4DntgtWdtJQw\"",
		"mtime": "2026-11-19T14:06:26.681Z",
		"size": 3056,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building-150x150.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building-construction-worker-site-with-architect.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"bdb6-AaCylKxfVhZ/+1ODrvjqSC/qStM\"",
		"mtime": "2026-11-19T14:06:27.309Z",
		"size": 48566,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building-construction-worker-site-with-architect.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building-construction-worker-site-with-architect-300x200.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"333d-A6JNq/QuHJYvXK5plEXoytWOI8w\"",
		"mtime": "2026-11-19T14:06:26.873Z",
		"size": 13117,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building-construction-worker-site-with-architect-300x200.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building-construction-worker-site-with-architect-768x512.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e422-ifY2GIboXyZGsV6RUN3moQC2MzY\"",
		"mtime": "2026-11-19T14:06:26.140Z",
		"size": 58402,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building-construction-worker-site-with-architect-768x512.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building.png": {
		"type": "image/png",
		"etag": "\"b96-DsT/mGB1lTae1w2K/mYclrE6xkg\"",
		"mtime": "2026-11-19T14:06:27.389Z",
		"size": 2966,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/building.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/buildings-150x150.png": {
		"type": "image/png",
		"etag": "\"1d29-jagb5tGulkQxOSbvgZh036HJHso\"",
		"mtime": "2026-11-19T14:06:26.473Z",
		"size": 7465,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/buildings-150x150.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/buildings.png": {
		"type": "image/png",
		"etag": "\"26ee-jn5o7GEp+uVDxhqXpldNmtCPin4\"",
		"mtime": "2026-11-19T14:06:27.606Z",
		"size": 9966,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/buildings.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/e2827050-9654-4cd2-8e2c-aeb17c5885ca.svg": {
		"type": "image/svg+xml",
		"etag": "\"1fa-3fc+YNnyFU87zfQxqKOAp7ccZSc\"",
		"mtime": "2026-11-19T14:06:26.001Z",
		"size": 506,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/e2827050-9654-4cd2-8e2c-aeb17c5885ca.svg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/ec912d03-ab7f-4d42-9952-7beab767761b.svg": {
		"type": "image/svg+xml",
		"etag": "\"1ac-qlubWS9v9G5+G5hs9SQV/5+uwSE\"",
		"mtime": "2026-11-19T14:06:25.940Z",
		"size": 428,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/ec912d03-ab7f-4d42-9952-7beab767761b.svg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Civil-Repairs-Structural-Maintenance.webp": {
		"type": "image/webp",
		"etag": "\"18c8e-lpVkboSWRfHK3VHOPE5D78GBAIU\"",
		"mtime": "2026-11-19T14:06:27.341Z",
		"size": 101518,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Civil-Repairs-Structural-Maintenance.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/excavator-action-768x520.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"108a8-zmHtGbbSvOsEsEECEOJzAtlMXlY\"",
		"mtime": "2026-11-19T14:06:26.234Z",
		"size": 67752,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/excavator-action-768x520.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/excavator-action-300x203.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2e29-GnsnPGA3KJQEdL/VXgnDIkn0zJk\"",
		"mtime": "2026-11-19T14:06:26.656Z",
		"size": 11817,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/excavator-action-300x203.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/excavator-action.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1ec76-GjTepnZNevsunlMixVGTxFhsCoQ\"",
		"mtime": "2026-11-19T14:06:26.306Z",
		"size": 126070,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/excavator-action.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Exterior-Painting-Building-Repairing.webp": {
		"type": "image/webp",
		"etag": "\"14348-ajCoH6Ku+r9eCYjGsSvbHoBCmnw\"",
		"mtime": "2026-11-19T14:06:26.033Z",
		"size": 82760,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Exterior-Painting-Building-Repairing.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/modern-house-150x150.png": {
		"type": "image/png",
		"etag": "\"1766-eVobZN49TjODholRZAwieQa6CSg\"",
		"mtime": "2026-11-19T14:06:27.650Z",
		"size": 5990,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/modern-house-150x150.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/modern-house.png": {
		"type": "image/png",
		"etag": "\"1c5c-K7t++KFNAR+L81y1kEIgWt/Exho\"",
		"mtime": "2026-11-19T14:06:26.207Z",
		"size": 7260,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/modern-house.png"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/gray-internal-structure-building.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"25588-d2GQpxrpmtohH9Go9muNrMWK5Ig\"",
		"mtime": "2026-11-19T14:06:27.197Z",
		"size": 152968,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/gray-internal-structure-building.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/gvpcevqbxm4.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2c8b1-1DhBXgpi7DVgmpeRiDbHslpttgs\"",
		"mtime": "2026-11-19T14:06:27.489Z",
		"size": 182449,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/gvpcevqbxm4.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qdaaasrzhdk.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1e6b8-PY/emD+DfLgKs6JM3j8jzrfY/vg\"",
		"mtime": "2026-11-19T14:06:27.372Z",
		"size": 124600,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qdaaasrzhdk.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qyzo7tdsvqs-1024x683.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"25a07-dXoFKCH9zuKO6T8Z45wOUhmIesw\"",
		"mtime": "2026-11-19T14:06:26.390Z",
		"size": 154119,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qyzo7tdsvqs-1024x683.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qyzo7tdsvqs-768x512.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"16505-9APX9QpZ6ojsD3cHhUcJINldvcE\"",
		"mtime": "2026-11-19T14:06:26.633Z",
		"size": 91397,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qyzo7tdsvqs-768x512.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qyzo7tdsvqs.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3f3ed-+7JFesbTLOUF5oTYzKO6G0YSo6Q\"",
		"mtime": "2026-11-19T14:06:27.283Z",
		"size": 259053,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qyzo7tdsvqs.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qyzo7tdsvqs-300x200.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"40c7-E0knCRzSqJxj4/kwy7UC+0liNDw\"",
		"mtime": "2026-11-19T14:06:26.276Z",
		"size": 16583,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/qyzo7tdsvqs-300x200.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Road-Miscellaneous-Civil-Works.webp": {
		"type": "image/webp",
		"etag": "\"1945c-54K5TJgtPuEDAHlsLfydsbrRDAQ\"",
		"mtime": "2026-11-19T14:06:27.898Z",
		"size": 103516,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Road-Miscellaneous-Civil-Works.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Team_1.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5a17-nPrV2o7iGzbUuHIF2jbgGAxYlXo\"",
		"mtime": "2026-11-19T14:06:26.827Z",
		"size": 23063,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Team_1.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Team_5.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6db4-fKygPPxiIExo3YXnVqSoGT3XeD0\"",
		"mtime": "2026-11-19T14:06:27.939Z",
		"size": 28084,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Team_5.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Team_7.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"62f9-63rLGGwuOfeIF50zDMZkHLeXBLs\"",
		"mtime": "2026-11-19T14:06:26.923Z",
		"size": 25337,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Team_7.jpg.jpeg"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Texture-PU-Polishing-Works.webp": {
		"type": "image/webp",
		"etag": "\"7cd2-bv9cRZdgI/okponOfQiVIZp3/UM\"",
		"mtime": "2026-11-19T14:06:27.467Z",
		"size": 31954,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Texture-PU-Polishing-Works.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Waterproofing-Solutions.webp": {
		"type": "image/webp",
		"etag": "\"1a382-C91ilxLmOwPwcIecdCUG3/iHieI\"",
		"mtime": "2026-11-19T14:06:27.672Z",
		"size": 107394,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Waterproofing-Solutions.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Untitled-design-5.webp": {
		"type": "image/webp",
		"etag": "\"b28e-NIf96+CGoz6wp3sB3T/Vuo/KZiM\"",
		"mtime": "2026-11-19T14:06:27.923Z",
		"size": 45710,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/Untitled-design-5.webp"
	},
	"/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/xjosjtk8u-c.jpg.jpeg": {
		"type": "image/jpeg",
		"etag": "\"243a0-UZaq0gtrRDn4dS0vxJ2X3OUeF7U\"",
		"mtime": "2026-11-19T14:06:27.251Z",
		"size": 148384,
		"path": "../public/atharvdecorators.relegal.in_3216e22a-5a41-4ac7-bb92-96e91567e9b6/xjosjtk8u-c.jpg.jpeg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_3d600e81121cbd9d3dbc6a7cd146ba92/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_k_K9Tq = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_k_K9Tq
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_3d600e81121cbd9d3dbc6a7cd146ba92/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_3d600e81121cbd9d3dbc6a7cd146ba92/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_3d600e81121cbd9d3dbc6a7cd146ba92/node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_jiti@_3d600e81121cbd9d3dbc6a7cd146ba92/node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
