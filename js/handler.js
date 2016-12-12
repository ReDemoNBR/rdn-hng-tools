function getWeapon(weapon="m1-garand", build="everhart", onSuccess=p=>p, onError=e=>e){
  fetch("/stats/"+getLocationName(build)+"/weapon/"+getLocationName(weapon, "json")).then(r=>jsonFetchPromise(r, onSuccess, onError));
}


function getWeaponUpgrade(upgrade="match-m72", type="barrel", weaponType="semi-automatic-rifle", build="everhart", onSuccess=p=>p, onError=e=>e){
  getStandardWeaponUpgrade(build, fetch("/stats/"+getLocationName(build)+"/weapon-upgrade/"+getLocationName(weaponType)+"/"+getLocationName(type)+"/"+getLocationName(upgrade, "json")).then(r=>jsonFetchPromise(r, onSuccess, onError)), ()=>"could not get the standard upgrade to merge");
}


function getStandardWeaponUpgrade(build="everhart", onSuccess=p=>p, onError=e=>e){
  fetch("/stats/"+getLocationName(build)+"/weapon-upgrade/no-upgrade.json").then(r=>jsonFetchPromise(r, onSuccess, onError))
}


function jsonFetchPromise(response, onSuccess=p=>p, onError=e=>e){
  response.ok && response.json().then(obj=>onSuccess(obj)) || onError(response);
}


function getAssaultTeam(at="guard", build="everhart", onSuccess=p=>p, onError=e=>e){
  fetch("/stats/"+getLocationName(build)+"/assault-team/"+getLocationName(at, "json"))
}
