export type IUserData = {
  id: number;
  full_name?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  address: string;
  dob: string;
  email: string;
  email_verified_at?: number;
  gender: string;
  img_url: string;
  marital_status: string;
  phone: string;
  role?: string;
  role_id?: number;
  status?: number;
  created_at?: string;
  first_language: string;
  country_citizen: string;
  passport_number: string;
};

export interface IResetPasswordRequest {
  password: string;
  password_confirmation: string;
  code: string | string[];
  type: string;
}

export interface IVerifyEmailRequest {
  code: string;
}

export interface IChangePasswordRequest {
  password: string;
  current_password: string;
  confirm_password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: string;
  message: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  user: IUserData;
}

export interface IRegisterRequest {
  first_name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IRegisterResponse {
  status: string;
  message: string;
  data: IUserData;
}

export interface IPasswordResetRequest {
  email: string;
  type: string;
}
