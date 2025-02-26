document.cookie = "username=涛涛"; // 写

// 读
const cookies = document.cookie.split('; ');

const map = {}

cookies.forEach(item => {
  const [key, value] = item.split('=')
  map[key] = value
})

console.log(map);