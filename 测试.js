const arr = [
  "wps_endcloud=1",
  "Hm_lvt_cb2fa0997df4ff8e739c666ee2487fd9=1738646088",
  "userInNewLayout=true",
  "weboffice_device_id=7e882ebdacbb47636d2634882d289f78",
  "weboffice_cdn=21",
  "env=prod-0",
  "wpsua=V1BTVUEvMS4wICh3ZWIta2RvY3M6Q2hyb21lXzEzMy4wLjAuMDsgd2luZG93czpXaW5kb3dzIDEwLjA7IFlPSEJrSDRBUnktZ183blQtQ05RVVE9PTpRMmh5YjIxbElDQXhNek11TUM0d0xqQT0pIENocm9tZS8xMzMuMC4wLjA=",
  "appcdn=volcengine-kdocs-cache.wpscdn.cn",
  "csrf=fSrYhEG8xhfJPbj5yZzQzdatfbyrTrmb",
  "userid=1221761607",
  "usename=涛涛"
]

const map = {}

arr.forEach(item => {
  const [key, value] = item.split('=')
  map[key] = value
})

console.log(map);
