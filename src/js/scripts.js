import dribble from '../assets/icons/dribble.png';
import fb from "../assets/icons/fb.png";
import instagram from "../assets/icons/instagram.png";


//imgs
import bijou from '../assets/bijou.jpg';
import negroni from "../assets/negroni.jpg";
import mojito from "../assets/mojito.jpg";
import rattlesnake from "../assets/rattlesnake.jpg";
import eggnogg from "../assets/eggnogg.jpg";
import zinger from "../assets/zinger.jpg";

export const appendDrinks = () => {
  const drinksArrays = [
    { name: "bijou", pathName: bijou },
    { name: "negron", pathName: negroni },
    { name: "mojito", pathName: mojito },
    { name: "texas rattlesnake", pathName: rattlesnake },
    { name: "egg nogg", pathName: eggnogg },
    { name: "zinger", pathName: zinger },
    { name: "bijou", pathName: bijou },
    { name: "negron", pathName: negroni },
    { name: "mojito", pathName: mojito },
    { name: "texas rattlesnake", pathName: rattlesnake },
    { name: "egg nogg", pathName: eggnogg },
    { name: "zinger", pathName: zinger }
  ];

  const appendImg = (name, path) => {
    return (document.getElementById("gridLayout").innerHTML += `
    <figure class="grid__element">
        <img class="grid__img" src=${path} alt=${name}>
        <figcaption class="grid__text">${name}</figcaption>
    </figure>
    `);
  }
  return drinksArrays.map(item => {
    return appendImg(item.name, item.pathName)
  });
}

export const appendSMicons = () => {
  const iconsPath = [
    { name: 'dribble', pathName: dribble },
    { name: 'instagram', pathName: instagram },
    { name: 'fb', pathName: fb },
  ];

  const appendIcons = (name, path) => {
    return document.getElementById("socialMediaIcons").innerHTML += `
    <a href="#" class="footer__social-link"><img class="footer__icon" src=${path} alt=${name} /></a>
    `;
  }

  return iconsPath.map(item => {
    return appendIcons(item.name, item.pathName);
  });

}


