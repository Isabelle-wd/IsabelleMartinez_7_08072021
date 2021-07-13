import React from "react";
import {Formik, Form, Field, ErrorMessage } from "formik"; 

function createPost() {
    return <div className="createPostPage">
        <Formik>
            <Form>
               <label> Titre : </label>
                <Field
                    autocomplete="off"
                    id="inputCreatePost"
                    name="postTitle"
                    placeholder="(ex. titre)"
                />
                <label> Publication : </label>
                <Field
                    autocomplete="off"
                    id="inputCreatePost"
                    name="postContent"
                    placeholder="(ex. publication)"
                />
                <label> Identifiant : </label>
                <Field
                    autocomplete="off"
                    id="inputCreatePost"
                    name="username"
                    placeholder="(ex. Isabelle123)"
                />
                <button type="submit"> Publier </button>

            </Form>


        </Formik>
    </div>;
}

export default createPost;