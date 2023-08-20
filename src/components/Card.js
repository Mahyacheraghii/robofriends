import React from 'react';

const Card = ({name, email,id }) => {
        return (
        <div className='bg-white-50 br3 pa3 ma2 grow bw2 shadow-5 inline-flex flex-column items-center'>
            <img alt='robots' src={`https://robohash.org/${id}?size=100x100`} className='mb3' />
            <div>
                <h2 className='mb2'>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;