import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div class="row" style={"margin-left: 0; margin-right: 0"}>
    <nav class="navbar navbar-default navbar-drop">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-links2" aria-expanded="false">
                <span class="current-selection">About</span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="nav-links2">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">About</a></li>
                <li><a href="#">Licensing</a></li>
                <li class="panel-group" id="link-accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel">
                        <div class="panel-heading" role="tab" id="panel-heading">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#link-accordion" href="#panel-content" aria-expanded="false" aria-controls="panel-content">
                                    Billing
                                </a>
                            </h4>
                        </div>
                        <div id="panel-content" class="panel-collapse collapse" role="tabpanel" aria-labelledby="panel-heading">
                            <div class="panel-body">
                                <ul>
                                    <li class="active"><a href="#">Auto (Q03-1234567)</a></li>
                                    <li>
                                        <a href="#">Sub Heading</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel">
                        <div id="panel-content2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="panel-heading2">
                            <div class="panel-body">
                                <ul>
                                    <li class="active"><a href="#">Personal Vehicle - Auto (Q03-1234567)</a></li>
                                    <li><a href="#">Another Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-heading" role="tab" id="panel-heading3">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#link-accordion" href="#panel-content3" aria-expanded="false" aria-controls="panel-content3">
                                    Other
                                </a>
                            </h4>
                        </div>
                        <div id="panel-content3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="panel-heading3">
                            <div class="panel-body">
                                <ul>
                                    <li><a href="#">Another Link That is Long</a></li>
                                    <li><a href="#">Another Link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>
    </div>
  )
}
