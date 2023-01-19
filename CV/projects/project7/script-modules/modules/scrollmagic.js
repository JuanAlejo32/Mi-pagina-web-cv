const d = document


export const scrollMeffect = ()=>{
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: ".showcase-1 ", duration:1000})
                    .setTween(".img-show-sc", { scale: 1.2})
                    .addTo(controller);
    }

export const scrollYeffect = ()=>{
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: ".item-img-shop", duration: 1000,triggerHook:0})
                    .setTween(".wrapper-title-item", { y: 50})
                    .addTo(controller);
    }

export const scrollYeffect2 = ()=>{
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: ".item-img-shop", duration: 1000,triggerHook:0})
                    .setTween(".itemshop-1", { scale:1.2})
                    .addTo(controller);
    }

export const scrollYeffect3 = ()=>{
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: ".item-f-2", duration: "200%",triggerHook:0.1})
                    .setTween(".wrapper-side-title-item", { y:"-20%",ease: Linear.easeNone})
                    .addTo(controller);
    }
    
