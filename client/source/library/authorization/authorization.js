import checker from './permission-checker';
import Permissions from './permissions-model';


class Authorization {
	constructor(paths) {
		this.permissions = new Permissions(paths);
		this.userType = '';
		this.checker = checker(this);

		return {
			checkPermission: this.checker,
			provideUserType: this.provideUserType.bind(this)
		}
	}

	provideUserType(providedType) {
		const { userType } = providedType;
		this.userType = userType;
	}
}

export default Authorization;
