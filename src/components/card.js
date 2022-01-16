import React  from 'react';

//We are directly destrcturing the props here...
const card = ({name, email, id}) => {

    return (
        //We can only return one element, but we can wrap any number of elements inside of the element.
        //We are using ${props.id} to get the value of id property. 
        //We are using {``}  in the src of image tag beacuse it is an JS expression that would get evaluated.
        <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5 tc'>
            <img alt='Profile_pic' src={`https://robohash.org/${id}?100X100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default card;