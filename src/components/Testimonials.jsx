import "../style.css"
import arrow from "../assets/arrow.svg";
import { useState } from "react";

const Testimonials = () => {

    const [index, setIndex] = useState(0);

    const testimonials = [
        {   
            comment: "This course helped me understand React from scratch. Highly recommended!",
            name: "Alice Johnson"
        },
        {   
            comment: "Clear explanations and practical projects. I learned a lot.",
            name: "Brian Lee"
        },
        {   
            comment: "The instructor made complex topics easy to grasp.",
            name: "Carla Smith"
        },
        {   
            comment: "Great pacing and hands-on examples throughout the course.",
            name: "David Kim"
        },
        {
            comment: "I feel much more confident building React apps now.",
            name: "Emily Turner"
        },
        {
            comment: "The projects were fun and really solidified my learning.",
            name: "Frank Harris"
        },
        {
            comment: "Supportive community and excellent teaching style.",
            name: "Grace Lin"
        },
        {
            comment: "I appreciated the step-by-step approach to each topic.",
            name: "Henry Adams"
        },
        {
            comment: "The course exceeded my expectations in every way.",
            name: "Isabella Moore"
        },
        {
            comment: "I would recommend this to anyone wanting to learn React.",
            name: "Jack Wilson"
        }
    ]


    return (
        <div className="container">
            <h1>{testimonials[index].comment} <br /> <span>- {testimonials[index].name}</span></h1>
            <button onClick={() => setIndex(currentIndex => (currentIndex + 1)%testimonials.length)}>
                <span>Next</span>
                <img src={arrow} alt="svg" />
            </button>
        </div>
    )
}

export default Testimonials