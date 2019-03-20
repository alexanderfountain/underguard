import React from "react";
import styled from "styled-components";
import * as variable from '../../variables';
import Form from "../../form";


const SectionFormStyle = styled.section`

`;



const SectionForm = () => (

<Form className="section-form">
<form name="homecontact" method="post" netlify-honeypot="bot-field" data-netlify="true">
			<input type="hidden" name="form-name" value="contact3" />
			<p hidden> <label htmlFor="bot-field">Don’t fill this out:{' '}<input name="bot-field" /> </label> </p>
								<div class="form-group">
									<label for="name" class="lb-name">NAME</label>
									<input type="text" name="name" id="name" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<label for="email" class="lb-email">EMAIl ADDRESS</label>
									<input type="email" name="email" id="email" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<label for="phone" class="lb-phone">PHONE</label>
									<input type="tel" name="phone" id="phone" class="form-control" data-required="false" data-interactive="true" />
								</div>
								<div class="form-group text">
									<label for="textarea" class="lb-message">YOUR MESSAGE</label>
									<textarea name="textarea" id="textarea" class="textarea form-control" data-required="true" data-trim="true"/>
								</div>
								<div>
									<button type="submit" class="btn btn-submit">SEND MESSAGE</button>
								</div>
							</form>
</Form>
)

export default SectionForm