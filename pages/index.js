import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS=[
    {
        id : "M1",
        title : "The First Meetup",
        image : "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address : "Some Address 5, 1234 Some City",
        discription : "This was our first meetup"
    },
    {
        id : "M2",
        title : "The Second Meetup",
        image : "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address : "Some Address 6, 1234 Some City",
        discription : "This was our second meetup"
    },
]
function Homepage(){
    return(

        <MeetupList meetups={DUMMY_MEETUPS} />

    )
}

export default Homepage