import React, { Component } from 'react'
import ImageItem from './ImageItem'

export default class ImageList extends Component {
    render() {
        return (
            <div>
                <ul className="images">
                    {this.props.image.map((img) => (
                        <li> <ImageItem url={img.url} title={img.title} /> </li>
                    )
                    )}

                </ul>
            </div>
        )
    }
}
