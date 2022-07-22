import React from "react";
import './Websites.scss';
import PolyImg from '../image/websites/poly.png';
import YgpImg from '../image/websites/ygp.png';
import GadgetsImg from '../image/websites/4gadgets.png';
import ParallelsImg from '../image/websites/parallels.png';
import VimeoImg from '../image/websites/vimeo.png';

export default class Websites extends React.Component {

    websites = [{
        name: 'Vimeo Enterprise',
        url: 'https://vimeoenterprise.co.uk/',
        img: VimeoImg
    },{
        name: 'Exertis Poly',
        url: 'https://microsites.exertis.co.uk/poly',
        img: PolyImg
    }, {
        name: '4Gadgets',
        url: 'https://store.4gadgets.co.uk/',
        img: GadgetsImg
    },
    {
        name: 'Your Gaming Platform',
        url: 'https://yourgamingplatform.co.uk/',
        img: YgpImg
    },
    {
        name: 'Parallels RAS',
        url: 'https://parallelsras.co.uk/',
        img: ParallelsImg
    }]

    renderWebsites() {
        return(
            this.websites.map((website, i) => {
                return(
                    <a target='_blank' rel="noreferrer" href={website.url}>
                        <div className="website" key={i}>
                            <div className="website-name">
                                <p>{website.name}</p>
                            </div>
                            <img src={website.img} alt={website.name}></img>
                            <p className="website-click">Click to check</p>
                        </div>
                    </a>
                );
            })
        );
    }

    render() {
        return(
            <div id="Websites">
                <h2>Websites I was working on</h2>
                {this.renderWebsites()}
            </div>
        );
    }
}