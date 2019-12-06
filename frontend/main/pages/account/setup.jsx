import React from "react"

import Link from "next/link"
import { Link as UILink } from "@dk3/ui/atoms/Typography"
import { SentryErrorBoundary } from "@dk3/shared-frontend/lib/SentryErrorBoundary"

import { AccountSetupForm } from "../../components/AccountSetupForm"
import { CurrentUser } from "@dk3/shared-frontend/lib/CurrentUser"
import { PageWrapper } from "../../components/PageWrapper"

export default function Setup() {
  return (
    <SentryErrorBoundary>
      <PageWrapper>
        <CurrentUser>
          {({ isLoggedIn }) =>
            isLoggedIn ? (
              <AccountSetupForm />
            ) : (
              <Link href="/login" as="/account/login" passHref>
                <UILink>Please login</UILink>
              </Link>
            )
          }
        </CurrentUser>
      </PageWrapper>
    </SentryErrorBoundary>
  )
}