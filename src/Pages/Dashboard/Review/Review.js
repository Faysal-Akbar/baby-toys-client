import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const [review, setReview] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }
    const handleReviewSubmit = (e) => {
        const reviews = {
            ...review,
            name: user.displayName,
            email: user.email,
        }
        // send to database
        fetch('https://boiling-earth-11841.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(reviews),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Review Posted Successfully");
            }
        })

        e.preventDefault();
    } 
    return (
        <Box>
            <Typography variant="h4" sx={{mb: 5}}>
                Give Your Review
            </Typography>

            <form onSubmit={handleReviewSubmit}>
            <TextField
            sx={{width: "30%"}}
            defaultValue={user.displayName}
            variant="standard" 
            /> <br />
            <TextField
            sx={{width: "30%"}}
            defaultValue={user.email}
            variant="standard" 
            /> <br />
            <TextField
            sx={{width: "30%"}}
            label="Rating"
            name="rating"
            onBlur={handleOnBlur}
            variant="standard" 
            /> <br /> <br />
            <textarea
            style={{ width: 350, height: 100, backgroundColor: 'lightGray' }}
            placeholder="Some Text"
            typeof="text"
            name="review"
            onBlur={handleOnBlur}
            variant="standard" 
            /> <br />    
            <Button type="submit" style={{backgroundColor: '#4298F9'}} variant="contained">POST</Button>
            </form>
        </Box>
    );
};

export default Review;