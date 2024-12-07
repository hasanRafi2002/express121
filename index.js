const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000;
app.get('/r1',(req,res)=>{
    res.send("hello rafi")
})

app.get('/r2',(req,res)=>{
    res.json(
        [{
            "id": 1,
            "name": "John Doe",
            "country": "USA",
            "dateOfBirth": "1990-01-15",
            "email": "john.doe@example.com",
            "phone": "+1-202-555-0123",
            "profession": "Software Engineer",
            "hobbies": ["Reading", "Traveling", "Cycling"]
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "country": "Canada",
            "dateOfBirth": "1985-07-22",
            "email": "jane.smith@example.com",
            "phone": "+1-416-555-0456",
            "profession": "Data Scientist",
            "hobbies": ["Painting", "Hiking", "Cooking"]
        },
        {
            "id": 3,
            "name": "Ahmed Khan",
            "country": "Pakistan",
            "dateOfBirth": "1993-05-10",
            "email": "ahmed.khan@example.com",
            "phone": "+92-300-555-1234",
            "profession": "Graphic Designer",
            "hobbies": ["Photography", "Gaming", "Writing"]
        },
        {
            "id": 4,
            "name": "Li Wei",
            "country": "China",
            "dateOfBirth": "1998-11-30",
            "email": "li.wei@example.com",
            "phone": "+86-10-555-6789",
            "profession": "Mechanical Engineer",
            "hobbies": ["Robotics", "Sketching", "Swimming"]
        },
        {
            "id": 5,
            "name": "Maria Garcia",
            "country": "Spain",
            "dateOfBirth": "1995-09-12",
            "email": "maria.garcia@example.com",
            "phone": "+34-600-555-9876",
            "profession": "Marketing Specialist",
            "hobbies": ["Dancing", "Photography", "Volunteering"]
        },
        {
            "id": 6,
            "name": "Emmanuel Okoro",
            "country": "Nigeria",
            "dateOfBirth": "1990-03-18",
            "email": "emmanuel.okoro@example.com",
            "phone": "+234-803-555-4567",
            "profession": "Doctor",
            "hobbies": ["Running", "Cooking", "Gardening"]
        },
        {
            "id": 7,
            "name": "Hana Kim",
            "country": "South Korea",
            "dateOfBirth": "1988-12-05",
            "email": "hana.kim@example.com",
            "phone": "+82-10-555-3456",
            "profession": "Product Manager",
            "hobbies": ["K-pop", "Yoga", "Reading"]
        },
        {
            "id": 8,
            "name": "Oliver Brown",
            "country": "UK",
            "dateOfBirth": "1982-06-21",
            "email": "oliver.brown@example.com",
            "phone": "+44-20-555-7890",
            "profession": "Architect",
            "hobbies": ["Sketching", "Traveling", "Cycling"]
        },
        {
            "id": 9,
            "name": "Aisha Ali",
            "country": "Egypt",
            "dateOfBirth": "1994-08-11",
            "email": "aisha.ali@example.com",
            "phone": "+20-2-555-4321",
            "profession": "Teacher",
            "hobbies": ["Teaching", "Knitting", "Gardening"]
        },
        {
            "id": 10,
            "name": "Lucas Silva",
            "country": "Brazil",
            "dateOfBirth": "1992-02-14",
            "email": "lucas.silva@example.com",
            "phone": "+55-11-555-6789",
            "profession": "Civil Engineer",
            "hobbies": ["Soccer", "Cooking", "Movies"]
        }]
    )
})

app.get('/r3',(req,res)=>{
    res.send("hello rafi")
})

app.get('/r4',(req,res)=>{
    res.send("hello rafi")
})


app.get('/', (req, res) => {
  res.send( `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banner Example</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .banner {
            position: relative;
            background-image: url('https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg'); 
            background-size: cover;
            background-position: center;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        }
        .banner h1 {
            font-size: 3rem;
            margin: 0;
        }
        .banner p {
            font-size: 1.2rem;
            margin-top: 10px;
        }
        .banner .cta {
            margin-top: 20px;
        }
        .banner a {
            text-decoration: none;
            color: white;
            background: #007BFF;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1rem;
            transition: background 0.3s ease;
        }
        .banner a:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <div class="banner">
        <div>
            <h1>Welcome to Career Compass</h1>
            <p>Your gateway to amazing career opportunities</p>
            <div class="cta">
                <a href="#explore">Explore Now</a>
            </div>
        </div>
    </div>
</body>
</html>

    
    `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})