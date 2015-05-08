# Magento template hints toggler

This bookmarklet is the easiest way to toggle visibility of Magento's template hints.

---

You need 2 things:

1. You need install this plugin: [Easy Template Path Hints](https://github.com/MagePsycho/MagePsycho_Easypathhints "Plugin's repository").
  * _just clone it into your cms app directory tree synchronous_
2. Then add bookmark with the following URL to your browser's toolbar panel:

```javascript
javascript:(function(t){var e=t.location.search,a=/(code=\w+)/.test(e),c=/(tp=\d)/.test(e),n=[];if(a||n.push("code=magento"),c){var o=parseInt(e.match(/tp=(\d+)/)[1]),p=new Number(!o);e=e.replace(/(tp=\d+)/gi,"tp="+p)}else n.push("tp=1");n.length&&""!=e&&(e+="&"),t.location.search=e+n.join("&")})(document);
```