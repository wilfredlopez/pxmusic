import React from 'react'
import {reduxForm, Field} from 'redux-form'
import _ from 'lodash'



import UploadField from './UploadField'


const FIELDS = [
    {
        label:"*Song Title", name:"title", placeholder:"Song itle" , id:"song_title",type:"text"
    },
    {
        label:"*Artist", name:"artist", placeholder:"Artist" , id:"song_artist",type:"text"
    },
    {
        label:"Album", name:"album", placeholder:"album" , id:"song_album",type:"text"
    },
    {
        label:"*Mp3 Url", name:"url", placeholder:"mp3 Url" , id:"song_url",type:"textarea"
    },
    {
        label:"*Category", name:"category", placeholder:"Category" , id:"song_category",type:"textarea"
    },
    {
        label:"Image", name:"lkjlkjljl", placeholder:"Image" , id:"song_img", type:"text"
    }
]

class UploadForm extends React.Component{
    renderFields(){
        return _.map(FIELDS, ({label, name, placeholder, id, type},index)  => {
           return  <Field
            key={index} 
            type={type}
            label={label}
            name={name}
            placeholder={placeholder}
            id={id}
            component={UploadField}
        />
        })
    }

    render(){
        return (<div className="border mt-3 mb-5 px-3">

                    <h1 className="display-5  mt-4 text-center">Upload Song</h1>

                    <form encType="multipart/form-data" onSubmit={this.props.handleSubmit(this.props.onUploadSubmit)}>
                        {this.renderFields()}

                        <div className="form-group">
                            <label htmlFor="imgUrl">Image</label>
                            <input className="form-control" id="imgUrl" type="file" name="img"/>
                        </div>

                        <small>*required fields</small> 

                        <button type="submit" className="btn btn-success text-right ml-5 mb-3">
                        <i className="">Upload</i>
                        </button>                    


                    </form>

            </div>)
    }
}


function validate(values){
    const errors = {}

    if(!values.title){
        errors.title = 'You most provide a song title'
    }

    if(!values.artist){
        errors.artist = 'Artist must be included'
    }

    if(!values.url){
        errors.url = 'Mp3 URL must be provided'
    }

    if(!values.category){
        errors.category = 'a category name must be provided'
    }


    

    return errors
}


export default reduxForm({
    validate,
    form: 'UploadForm',
    destroyOnUnmount:true
    
  })(UploadForm)