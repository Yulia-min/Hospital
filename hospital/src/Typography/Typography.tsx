import React from 'react'
import cn from 'classnames'
import './Typography.scss'

export type TypographyType = {
  children: React.ReactNode
  className?: string
  uppercase?: string
}

export const Headline1 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-h1', { uppercase }, className)}>{children}</div>
)

export const Headline2 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-h2', { uppercase }, className)}>{children}</div>
)

export const Headline3 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-h3', { uppercase }, className)}>{children}</div>
)

export const Headline4 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-h4', { uppercase }, className)}>{children}</div>
)

export const Headline5 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-h5', { uppercase }, className)}>{children}</div>
)

export const Headline6 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-h6', { uppercase }, className)}>{children}</div>
)

export const Subtitle1 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-subtitle1', { uppercase }, className)}>{children}</div>
)

export const Subtitle2 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-subtitle2', { uppercase }, className)}>{children}</div>
)

export const Body1 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-body1', { uppercase }, className)}>{children}</div>
)
export const Body2 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-body2', { uppercase }, className)}>{children}</div>
)

export const Button1 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-button1', { uppercase }, className)}>{children}</div>
)

export const Button2 = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-button2', { uppercase }, className)}>{children}</div>
)

export const Caption = ({ children, className, uppercase }: TypographyType) => (
  <div className={cn('typography typography-caption', { uppercase }, className)}>{children}</div>
)
