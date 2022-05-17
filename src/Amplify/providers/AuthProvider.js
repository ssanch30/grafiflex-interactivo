import { Auth } from "@aws-amplify/auth";



const defaultOptions = {
  authGroups: [],
};

export class AuthProvider {

   constructor(options) {
    this.authGroups = options?.authGroups || defaultOptions.authGroups;
  }

  login = ({
    username,
    password,
    clientMetadata,
  }) => {
    return Auth.signIn(
      username,
      password,
      clientMetadata
    );
  };

   logout = ()=> {
    return Auth.signOut();
  };

   checkAuth = async () => {
    const session = await Auth.currentSession();

    if (this.authGroups.length === 0) {
      return;
    }

    const userGroups = session.getAccessToken().decodePayload()[
      "cognito:groups"
    ];

    if (!userGroups) {
      throw new Error("Unauthorized");
    }

    for (const group of userGroups) {
      if (this.authGroups.includes(group)) {
        return;
      }
    }

    throw new Error("Unauthorized");
  };

   checkError = () => {
    return Promise.resolve();
  };

   getPermissions = async () => {
    const session = await Auth.currentSession();

    const groups = session.getAccessToken().decodePayload()["cognito:groups"];

    return groups ? Promise.resolve(groups) : Promise.reject();
  };
}