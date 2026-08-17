import "react";

declare module "react" {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    netlify?: string;
  }
}
