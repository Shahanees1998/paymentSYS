import React from 'react'
import styles from './styles.module.css'

const FullScreenLoader: React.FC = () => {
  return (
    <>
      <div
        style={{
          height: '90vh',
          top: '50%',
          bottom: 0,
          width: '100%',
          zIndex: 9,
          backgroundColor: 'transparent',
          position: 'absolute'
        }}
      >
        <div className={styles.loading}>
          {/* Loading&#8230 */}
          <h4 className={styles.text}>{'Loading.....'}</h4>
        </div>
      </div>
    </>
  )
}

export default FullScreenLoader
