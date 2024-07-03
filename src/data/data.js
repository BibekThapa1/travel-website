// Demo images
import image1 from "../images/iilam.jpeg";
import image2 from "../images/iilam2.jpeg";
import image3 from "../images/slider1.jpg";
import image4 from "../images/slider2.jpg"

const placeData = [
    {
        name:"Itahari",
        description:"loremajskfdjkwsdajfk djsfoijeiajdfi fjdoisjf jdwsaf oisdfjoijd f"
    },
    {
        name:"Bagdoda",
        description:"loremajskfdjkwsdajfk djsfoijeiajdfi fjdoisjf jdwsaf oisdfjoijd f"
    },
    {
        name:"Biratchowk",
        description:"loremajskfdjkwsdajfk djsfoijeiajdfi fjdoisjf jdwsaf oisdfjoijd f"
    },
    {
        name:"Kanepokhari",
        description:"loremajskfdjkwsdajfk djsfoijeiajdfi fjdoisjf jdwsaf oisdfjoijd f"
    },
    {
        name:"Betana",
        description:"loremajskfdjkwsdajfk djsfoijeiajdfi fjdoisjf jdwsaf oisdfjoijd f"
    },
    {
        name:"Vinland",
        description:"loremajskfdjkwsdajfk djsfoijeiajdfi fjdoisjf jdwsaf oisdfjoijd f"
    },
    {
        name:"Jamun Khadi",
        description:"loremajskfdjkwsdajfk djsfoijeiajdfi fjdoisjf jdwsaf oisdfjoijd f"
    },
]

const places = ["Itahari","Jamun Khadi","Vinland","Betana","Kanepokhari","Biratchowk","Gothgaun","khorsane"]

const placeDescription = [
    {
        name:"Betana",
        description:"loremajskfdjkwsdajfk djsfoijeiajdfi fjdoisjf jdwsaf oisdfjoijd f",
        images:[
            image1,
            image2,
            image3,
            image4,
        ],
        map:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.662811087514!2d87.4294928754733!3d26.65927647679917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6439b6f79a19%3A0xfdabfe8a847dfe7e!2sBetana%20Wetland!5e0!3m2!1sen!2snp!4v1719993574359!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    },

]


export {
    places,
    placeData,
    placeDescription
}