import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    function MeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)
    }
    return(

        <NewMeetupForm onAddMeetup={MeetupHandler}/>

    )
}

export default NewMeetupPage;




