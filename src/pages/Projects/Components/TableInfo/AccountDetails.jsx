import PropTypes from "prop-types";

function AccountDetails({account}) {
    return (
        <>
            <div className="flex items-center gap-2">
                <img
                    className="w-8 h-8 rounded-full"
                    src={account.imageProfile}
                    alt={account.name}
                />
                <div>
                    <p className={"text-sm text-sub-500 dark:text-sub-300"}>{account.name}</p>
                    <p className="text-xs text-sub-500 dark:text-sub-300">{account.rule}</p>
                </div>
            </div>
        </>
    );
}

AccountDetails.propTypes = {
    account: PropTypes.shape({
        name: PropTypes.string,
        rule: PropTypes.string,
        imageProfile: PropTypes.string,
    })
}

export default AccountDetails;