import React from "react"

import DATA from "scripts/data"

export default class Entity extends React.Component {
    render() {
        return React.createElement("div", {
            // Identity
            ref: "entity",
            id: this.props.data.id,
            key: this.props.data.instance,
            style: this.style,
            className: "entity",
            // Events
            onClick: this.onClick.bind(this),
            onDoubleClick: this.onDoubleClick.bind(this),
        })
    }
    get style() {
        return {
            // Size
            width: Math.ceil(this.props.data.width || 1) * DATA.TILE.WIDTH + "px",
            height: Math.ceil(this.props.data.height || 1) * DATA.TILE.HEIGHT + "px",
            // Position
            position: "absolute",
            left: Math.floor(this.props.data.position && this.props.data.position.x || 0) * DATA.TILE.WIDTH + "px",
            top: Math.floor(this.props.data.position && this.props.data.position.y || 0) * DATA.TILE.HEIGHT + "px",
            marginLeft: this.props.data.anchor && this.props.data.anchor.x ? -1 * Math.floor((Math.ceil((this.props.data.width || 1) - 1) * Math.min(Math.max(this.props.data.anchor.x, 0), 1))) * DATA.TILE.WIDTH + "px" : null,
            marginTop: this.props.data.anchor && this.props.data.anchor.y ? -1 * Math.floor((Math.ceil((this.props.data.height || 1) - 1) * Math.min(Math.max(this.props.data.anchor.y, 0), 1))) * DATA.TILE.HEIGHT + "px" : null,
            // Background
            backgroundRepeat: !!this.props.data.texture ? "repeat" : null,
            backgroundSize: !!this.props.data.texture ? DATA.TILE.WIDTH + "px" : null,
            backgroundPosition: !!this.props.data.texture ? "bottom" : null,
            backgroundColor: !!this.props.data.color ? this.props.data.color : null,
            backgroundImage: !this.props.data.color ? "url(" + NULL_TEXTURE + ")" : null,
            WebkitMask: !!(this.props.data.sprite) ? "url(" + this.props.data.sprite + ")" : null,
            WebkitMaskRepeat: !!(this.props.data.sprite + "") ? "no-repeat" : null,
            WebkitMaskPosition: !!(this.props.data.sprite + "") ? "bottom" : null,
            WebkitMaskSize: !!(this.props.data.sprite + "") ? "contain" : null,
            // Transition
            transitionProperty: !!this.props.data.transition ? "top, left" : null,
            transitionTimingFunction: !!this.props.data.transition ? this.props.data.transition.timing || "ease" : null,
            transitionDuration: !!this.props.data.transition ? (this.props.data.transition.duration || 0.2) + "s" : null,
            transitionDelay: !!this.props.data.transition && !!this.props.data.transition.delay ? this.props.data.transition.delay + "s" : null,
            // Transforms
            transform: [
                !!this.props.data.skew ? "skewX(" + (this.props.data.skew || 0) + "deg)" : null,
                !!this.props.data.rotation ? "rotateZ(" + ((this.props.data.rotation || 0) % 360) + "deg)" : null,
                !!this.props.data.direction ? "scaleX(" + ((this.props.data.direction || 1) > 0 ? +1 : -1) + ")" : null,
            ].join("") || null,
            transformOrigin: !!this.props.data.rotation || !!this.props.data.skew || !!this.props.data.direction ? "center" : null,
            // Miscellaneous
            zIndex: this.props.data.stack,
            opacity: this.props.data.opacity,
            visibility: this.props.data.isHidden ? "hidden" : null,
            animationName: this.props.data.animation || null,
            animationDuration: 0.2 + "s",
            animationFillMode: "forwards",
        }
    }
    onClick(event) {
        if(!!this.props.data.onClick) {
            this.props.data.onClick(event)
        }
    }
    onDoubleClick(event) {
        if(!!this.props.data.onDoubleClick) {
            this.props.data.onDoubleClick(event)
        }
    }
}
