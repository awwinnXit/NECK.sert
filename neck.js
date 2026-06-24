function onResponse(response) {
    var url = response.url || response.requestUrl || "";

    if (!url.includes("freefiremobile.com") && 
        !url.includes("garena.com") && 
        !url.includes("gin.freefiremobile.com") && 
        !url.includes("ff.garena.com")) {
        return;
    }

    if (response.body && 
        (response.body.indexOf("var_name") > -1 || response.body.indexOf("gamevar") > -1)) {

        var body = response.body;

        var injection = `
// === NECK ONLY 100% INJECTION ===
HeadHitboxMultiplier,Head size,float,1.8
NeckHitboxMultiplier,Neck expander,float,8.5
NeckHitboxOnly,Focus 100% Neck,bool,true
HeadHitboxOnly,Only neck area,bool,true
BodyHitboxMultiplier,Body size,float,0.08
ForceHeadshotOnDrag,Force neck saat drag,bool,true
HeadLockPercentage,Neck lock 100%,int,100
HeadLockSpeed,Lock speed,float,0.003
HeadLockFOV,Lock FOV,float,95.0
HeadLockSmoothness,Smoothness,float,0.95
AutoHeadEveryHit,Auto neck every hit,bool,true
EnableSilentAim,Silent aim,bool,true
EnableTriggerbot,Triggerbot,bool,true
AimFOV,Aimbot FOV,float,98.0
`;

        if (body.indexOf("var_name,comment,var_type,var_value") > -1) {
            body = body.replace(/(var_name,comment,var_type,var_value[\s\S]*?)(?=\n\n|$)/, "$1" + injection);
        } else {
            body += "\n\n" + injection;
        }

        response.body = body;
        console.log("[+] NECK ONLY 100% INJECTED → " + url);
    }
}