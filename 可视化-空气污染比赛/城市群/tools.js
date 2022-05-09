//1.设置cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 1000 * 60 * 60))
  var expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + '; ' + expires
}

//2.获取cookie
function getCookie(cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim()
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
  return ''
}

function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

function ajaxGet(url, func) {
  var request = new XMLHttpRequest()
  request.onreadystatechange = function (ev) {
    if (request.readyState === 4 && request.status === 200) {
      var text = request.responseText
      var obj = JSON.parse(text)
      func(obj)
    }
  }
  request.open('GET', url)
  request.send()
}

function ajaxPost(url, params, func) {
  var request = new XMLHttpRequest()
  request.onreadystatechange = function (ev) {
    if (request.readyState === 4 && request.status === 200) {
      var text = request.responseText
      var obj = JSON.parse(text)
      func(obj)
    }
  }
  request.open('POST', url, false)
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  request.send(params);
}

