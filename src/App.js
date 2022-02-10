import './App.css';
import React from 'react';
import {GreetingRequest, GreetingResponse} from "./proto/services/Greeting_pb";
import {MyServiceClient} from "./proto/services/Greeting_grpc_web_pb";

function App() {
  
  const sendRpc = () => {
    const myService = new MyServiceClient('http://127.0.0.1:8081');

    const request = new GreetingRequest();
    request.setName("SuperUsername");

    myService.greeting(request, {}, (err, response) => {
      alert(response);
    });
  }

  return (
    <React.Fragment>
      <h1>gRPC React Example</h1>
      <button onClick={sendRpc}>Send gRPC Request to Envoy proxy server</button>
    </React.Fragment>
  );
}

export default App;
