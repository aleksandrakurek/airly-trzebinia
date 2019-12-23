import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default props => (
  <StaticQuery
    render={data => <TableInstallations data={data} {...props} />}
  />
)

const TableInstallations = ({ data, allRecords }) => {

  return (
    <div>
      ororo
    </div>
  )
}