export default function Contact(){
    return(
        <div>
            <form style={{padding:"10px"}}>
                <h2>Contact us</h2>
                <label for="name">Name : </label>
                <input type="text" id="name"  placeholder="Your name"required /><br></br>
                <label for="email">Email : </label>
                <input type="email" id="email" placeholder="Your Email" required /><br></br>
                <button type="submit"  >Send</button>
            </form>
        </div>
    )
}