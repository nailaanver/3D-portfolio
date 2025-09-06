import React, {forwardRef} from 'react';


  const Page = forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-white" ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});


export default Page;