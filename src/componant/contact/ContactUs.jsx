
const ContactUs = ()=>{
    return(
        <div>
            <h1 className="font-bold p-4 m-4">Contact Us</h1>
            <p>For any queries, please contact us at:</p>
            <ul>
                <li>Email: 
                    <a href="mailto:info@company.com">info@company.com</a>
                </li>
            </ul>
            <form>
                <input 
                    type="text"
                    className="border border-black m-2 p-2"
                    placeholder="name"
                ></input>
                <input 
                    type="text"
                    className="border border-black m-2 p-2"
                    placeholder="message"
                ></input>
                <button 
                    className="border border-black m-2 p-2 bg-gray-100 rounded-lg"
                >Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;