export interface IUser {
	_id: string;
	fName: string;
	lName: string;
	email: string;
	verificationHash: string;
	emailVerified: boolean;
	password: string;
	passwordResetToken?: string;
	passwordResetTokenExpires?: string;
	userRole: string;
	wishCards?: string;
	donationsMade?: string;
	joined: string;
	aboutMe?: string;
	loginMode: string;
	profileImage?: string;
}
