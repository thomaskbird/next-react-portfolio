import { NextPage } from 'next';
import React, { ReactElement, useEffect } from 'react'
import { errorsAdd, toggleIsLoading } from '~/redux/actions-general'
import { connect } from 'react-redux'

const COMPONENT_NAME = 'Splash';

interface SplashBaseProps {
  toggleIsLoading(): void;
  addError(err: any): void;
}

const SplashBase: NextPage<SplashBaseProps> = ({ toggleIsLoading, addError }): ReactElement => {
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
            console.log('enter', e);
          })
          .on('leave', function (e: any) {
            console.log('leave', e);
          })
          .addTo(controller);
      }
    };
    load();
  }, []);

  const handleBtnClick = (ct: any) => {
    toggleIsLoading();
    addError({
      msg: `Error in ${ct}`,
      type: ct
    })
  }

  return (
    <div className={`${COMPONENT_NAME}`}>
      {['one', 'two', 'three', 'four', 'five', 'six'].map(ct => (
        <div key={ct} id={ct} className={`${COMPONENT_NAME}__section`}>
          <h2>{ct}</h2>

          <button onClick={() => handleBtnClick(ct)}>Click</button>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleIsLoading: () => dispatch(toggleIsLoading()),
  addError: (err: any) => dispatch(errorsAdd(err))
})

const Splash = connect(null, mapDispatchToProps)(SplashBase);

export default Splash;
