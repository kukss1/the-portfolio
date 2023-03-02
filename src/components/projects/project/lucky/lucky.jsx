import './lucky.css'

import { responses } from "../../../../assets/jsons/response";
import RandomResponse from './responses/RandomResponse';

function Lucky() {
  return (
    <div className='lucky_wrapper'>
      <h1 className='lucky_title'>Am I lucky today?</h1>
      <RandomResponse responses={responses} />
    </div>
  );
}

export default Lucky;
