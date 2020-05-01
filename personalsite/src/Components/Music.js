import React, { Component } from 'react';

export class Music extends Component {
    render() {
        return (
        <div>
            <div>
                <h4>Chill Music</h4>
                <div class="gallery">
                    <iframe  src="https://www.youtube.com/embed/a7Qt_SMAOcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/vAu4WIK-VfM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/UAsTlnjvetI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/FY0EtbilIGY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div>
                <h4>Electronic Music</h4>
                <div class="gallery">
                    <iframe  src="https://www.youtube.com/embed/rKbrxY3SZ0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/P-uFZVsgwZc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/twtW2qG8P0g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div>
                <h4>Pop-off Music</h4>
                <div class="gallery">
                    <iframe  src="https://www.youtube.com/embed/_NZWph5fNos" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div>
                <h4>Chinese Music</h4>
                <div class="gallery">
                    <iframe  src="https://www.youtube.com/embed/IBTmypxD2mU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/yxaA94HGo9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/hj4bnnek9MU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        );
    }
}

export default Music;