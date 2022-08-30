import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { toggleIsLoading } from '~/redux/actions-general'
import { connect } from 'react-redux'

const COMPONENT_NAME = 'Splash';

interface SplashBaseProps {
  toggleIsLoading(): void;
}

const SplashBase: NextPage = ({ toggleIsLoading }: SplashBaseProps): ReactElement => {
  useEffect(() => {
    const load = async () => {
      if (typeof window !== undefined) {
        const ScrollMagic = (await import('scrollmagic')).default;
        const controller = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
          triggerElement: '#three',
          triggerHook: 0.5,
          reverse: true,
        })
          .on('enter', function (e: any) {
            console.log('enter');
          })
          .on('leave', function (e: any) {
            console.log('leave');
          })
          .addTo(controller);
      }
    };
    load();
  }, []);

  const handleBtnClick = () => {
    toggleIsLoading()
  }

  return (
    <div className={`${COMPONENT_NAME}`}>
      {['one', 'two', 'three', 'four', 'five', 'six'].map(ct => (
        <div key={ct} id={ct} className={`${COMPONENT_NAME}__section`}>
          <h2>{ct}</h2>

          <button onClick={() => handleBtnClick()}>Click</button>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleIsLoading: () => dispatch(toggleIsLoading())
})

const Splash = connect(null, mapDispatchToProps)(SplashBase);

export default Splash;
