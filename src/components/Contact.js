import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">

                            {/* Name*/}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="mobile No:" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                     </div>
                                    <div className="contact_info_title">
                                        +91 9999 555 2197
                                     </div>
                                </div>
                            </div>

                            {/* Email*/}
                             <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="Email:" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                     </div>
                                    <div className="contact_info_title">
                                        aj@gmail.com
                                     </div>
                                </div>
                            </div>

                            {/* Address*/}
                             <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt="Address:" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                     </div>
                                    <div className="contact_info_title">
                                        Bhaimtal Nainitaal
                                     </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us ka form*/}

        <div className="contact_form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form_container p-5">
                            <div className="contact_form_title">
                                Any Suggestions or Complaints 
                            </div>

                            <form id="contact_form">
                                <div className="contact_form_name d-flex justify-content-between align-items-between">
                                    <input type="text" id="contact_form_name "
                                     className="contact_form_name input_field" placeholder="name" required />

                                    <input type="email" id="contact_form_email"
                                    className="contact_form_email input_field" placeholder="email" required />

                                     <input type="number" id="contact_form_phone "
                                        className="contact_form_phone input_field" placeholder="mobile number" required />
                                </div>

                                <div className="contact_form_text mt-4">
                                    <textarea className="text_field contact_form_message" id="" cols="80" rows="10" placeholder="message"></textarea>
                                </div>

                                <div className="contact_form_btn">
                                    <button type = "submit" className="button contact_submit_btn"> Submit Response</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
