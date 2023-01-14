import { NextPage } from 'next'
import React from 'react'
import ApplicationDisplay from '~/components/ApplicationDisplay';

const ApplicationView: NextPage = () => {
  return (
    <div className="p-10">
      <ApplicationDisplay />
    </div>
  )
}

export default ApplicationView
