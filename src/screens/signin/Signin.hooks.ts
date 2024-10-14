import {useState} from 'react';
import {success_code} from '../../services/apiConfig/apiConfig';
import AuthServices from '../../services/methods/AuthServices';
import {useCancelToken} from '../../utility/utilities';
import {useDispatch} from 'react-redux';
import {
  initcreateProfile,
  setCreatedProfile,
} from '../../redux/reducers/authReducer';

const useSignin = () => {
  const source = useCancelToken();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const onLogin = async () => {
    setLoader(true);
    try {
      const formdataObj = {
        UserName: 'live12@gmail.com',
        Password: '01012000',
      };
      const response = await AuthServices.login(formdataObj, source);

      if (response.data?.Status === success_code) {
        // console.log(
        //   JSON.stringify(response.data?.MasterData, undefined, 4),
        //   'onSuccess',
        // );
        dispatch(
          setCreatedProfile({
            FBAId: response.data.MasterData.FBAId,
            FullName: response.data.MasterData.FullName,
            UserName: response.data.MasterData.UserName,
            EmailID: response.data.MasterData.EmailID,
            MobiNumb1: response.data.MasterData.MobiNumb1,
            ProfPictName: response.data.MasterData.ProfPictName,
          }),
        );
      } else {
        dispatch(initcreateProfile());
        console.log(JSON.stringify(response.data, undefined, 4), 'onfailue');
      }
    } catch (error) {
      console.log('Error From The Blog Of onLogin Block', error);
    } finally {
      setLoader(false);
    }
  };

  return {
    onLogin,
    loader,
  };
};

export {useSignin};
