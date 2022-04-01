import Page from 'layout/page/Page';
import { useSetRecoilState } from 'recoil';
import { openLoginModalSelector } from 'state';

function FormSample(props: any) {

  return (
    <Page
      {...props}
    >
      <hr />
      form sample body
    </Page>
  );
}

export default FormSample;