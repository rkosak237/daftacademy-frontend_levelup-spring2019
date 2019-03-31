import bijou from '../assets/bijou.jpg';
import negroni from "../assets/negroni.jpg";
import mojito from "../assets/mojito.jpg";
import rattlesnake from "../assets/rattlesnake.jpg";
import eggnogg from "../assets/eggnogg.jpg";
import zinger from "../assets/zinger.jpg";

export default function() {
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
