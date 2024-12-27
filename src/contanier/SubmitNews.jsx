import React from 'react'
import {useForm} from "react-hook-form"
import './SubmitNews.css'

const SubmitNews = () => {
    const {register,handleSubmit,watch,formState: {errors,isSubmitting},}=useForm();
    async function onSubmit(data){
        await new Promise((resolve) => setInterval(resolve,5000));
        console.log("Form is submiting");
        console.log(data)
    }
    return (
        <div className='submitContanier'>
            <h2>News Submit Portal</h2>
            <p>Contribute to our Organitation</p>
            {/* run react-hook-form  */}
            <form id="submitNewsForm" onSubmit={handleSubmit(onSubmit)}>
                <div id="formLeft">
                    <label htmlFor="newsTitle">Enter News Title</label>
                    <input id="newsTitle" type="text"  {...register('newsTitle',{
                        required:true,
                        minLength:{value:3,message:"Length must be more than 2 letter"}}
                        )}/>
                    <label htmlFor="newsAuthor">Enter Author Name</label>
                    <input type="text" id="newsAuthor" {...register('newsAuthor',{required:true,minLength:{value:3,message:"Length must be more than 2 letter"}})}/>
                    <label htmlFor="newsEmail">Enter Your Email</label>
                    <input type="email"  id="newsEmail"  {...register('newsEmail',{required:true})}/>
                    <label htmlFor="newsLocation">Enter News Location</label>
                    <input type="text" id="newsLocation"  {...register('newsLocation',{required:true})}/>
                    <label htmlFor="newscatogary">Select News Catogary</label>
                    <select id="newsCatogary"  {...register('newsCatogary',{required:true})}>
                        
                        <option value="">Please Select news catogary</option>
                        <option value="sport">Sport</option>
                        <option value="politices">Politices</option>
                        <option value="education">Education</option>
                        <option value="opinion">Opinion</option>
                        <option value="science">Science</option>
                    </select>
                    <label htmlFor="newsAvatar">Choose a image for news</label>
                    <input type="file" id="newsAvatar" accept="image/png, image/jpeg"  {...register('newsAvatar',{required:true})}/>

                </div>
                <div id="formRight">
                    <label htmlFor="newsContent">Write Content about news here</label>
                    <textarea type="text" rows={10}  id="newsContent"   {...register('newsContent',{required:true,maxLength:1000})}/>
                    <div className="newsCheckBoxs">
                    <input type="checkbox"  id="newsConcent"  {...register('newsConcent1',{required:true})}/>
                    <label htmlFor="newsConcent">Agree With out term and condation</label>

                    </div>
                    <div className="newsCheckBoxs">
                    <input type="checkbox"  id="newsAnonymous" {...register('newsConcent2')}/>
                    <label htmlFor="newsAnonymous">Submit as anonymous</label>
                    </div>
                    <input type="submit" value={isSubmitting ? "Submitting.." : "Submit"} id="formSubmit" disabled={isSubmitting} />
                </div>
            </form>
        </div>
    )
}

export default SubmitNews
