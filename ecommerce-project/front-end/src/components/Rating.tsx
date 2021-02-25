import React from "react";
interface IProps{
    rating : number;
    numReviews : number;
};
interface IState{
};
export default class Rating extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <div className="rating">
               <span className={this.props.rating>=1 ? "fa fa-star" : this.props.rating>=0.5 ? "fa fa-star-half-o": "fa fa-star-o"}></span>

               <span className={this.props.rating>=2 ? "fa fa-star" : this.props.rating>=1.5 ? "fa fa-star-half-o": "fa fa-star-o"}></span>

               <span className={this.props.rating>=3 ? "fa fa-star" : this.props.rating>=2.5 ? "fa fa-star-half-o": "fa fa-star-o"}></span>

               <span className={this.props.rating>=4 ? "fa fa-star" : this.props.rating>=3.5 ? "fa fa-star-half-o": "fa fa-star-o"}></span>

               <span className={this.props.rating>=5 ? "fa fa-star" : this.props.rating>=4.5 ? "fa fa-star-half-o": "fa fa-star-o"}></span>

               <span>{this.props.numReviews} Reviews</span>
            </div>
        )
    };
};