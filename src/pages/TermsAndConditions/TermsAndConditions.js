import React from 'react'
import { BreadcrumbProps, MajorPoliciesProp, PoliciesProp } from './Data.js';
import styles from './TermsAndConditions.module.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.js';

const TermsAndConditions = () => {
  return (
    <>
      <Breadcrumb props={BreadcrumbProps} />
      <div className={styles.container}>
        {
            MajorPoliciesProp.map((policy) => {
                return (
                    <div className={styles.policyContainer}>
                        {policy.title &&
                            <div className={styles.title}> {policy.title} </div>
                        }
                        {policy.content &&
                            policy.content.map((content) => {
                                return (
                                    <li className={styles.content}>{content}</li>
                                );
                            })
                        }
                    </div>
                );
            })
        }
        {
            PoliciesProp.map((policy) => {
                return (
                    <div className={styles.policyContainer}>
                        {policy.title &&
                            <div className={styles.title2}> {policy.title} </div>
                        }
                        {policy.content &&
                            policy.content.map((content) => {
                                return (
                                    <li className={styles.content}>{content}</li>
                                );
                            })
                        }
                    </div>
                );
            })
        }
      </div>
    </>
  );
}

export default TermsAndConditions;
