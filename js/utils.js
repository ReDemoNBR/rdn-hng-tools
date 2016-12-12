function inherit(parent={}, child={}){
  for(prop in child)
    if(typeof child[prop]==="object")
      parent[prop] = inherit(parent[prop], child[prop]);
    else parent[prop] = child[prop];
  return parent;
}


function getLocationName(itemName="", extension=""){
  return itemName.replace(/\.+/g, "").replace(/[ (),'"]+/g, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").toLowerCase() + (extension && "."+extension.toLowerCase() || "");
}
